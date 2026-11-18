/* Model didàctic independent de la interfície; coordenades i temps simulats. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CodeySimulation = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const clamp = (v, min, max) => Math.max(min, Math.min(max, Number(v) || 0));
  const R = 20, WIDTH = 800, HEIGHT = 500;
  function intersects(x, y, box) {
    const dx = x - clamp(x, box.x, box.x + box.w), dy = y - clamp(y, box.y, box.y + box.h);
    return dx * dx + dy * dy < R * R;
  }
  class Engine {
    constructor(program = {}) {
      this.program = program;
      this.environment = { light: 70, sound: 20, obstacles: [{ x: 430, y: 190, w: 65, h: 120 }] };
      this.reset();
    }
    reset() {
      this.pose = { x: 160, y: 250, angle: 0 };
      this.output = { face: 'happy', text: '', rgb: '#22c55e' };
      this.tasks = []; this.running = false; this.motor = { speed: 0, turn: 0 };
      this.clock = 0; this.budget = 0; this.accumulator = 0; this.active = null;
      this.trace = 'Preparat. Executa el programa o prem A o B.';
      this.collision = false; this.nextTask = 0;
    }
    stop() { this.running = false; this.tasks = []; this.motor = { speed: 0, turn: 0 }; }
    obstacle() {
      const a = this.pose.angle * Math.PI / 180;
      for (let d = 0; d <= 85; d += 5) {
        const x = this.pose.x + Math.cos(a) * d, y = this.pose.y + Math.sin(a) * d;
        if (x < R || y < R || x > WIDTH - R || y > HEIGHT - R || this.environment.obstacles.some(b => intersects(x, y, b))) return true;
      }
      return false;
    }
    sensor(name) {
      if (name === 'obstacle') return this.obstacle();
      return this.environment[name] || 0;
    }
    test(block) {
      const value = this.sensor(block.sensor);
      const result = block.sensor === 'obstacle' ? (block.obstacleValue === 'false' ? !value : Boolean(value)) : block.compare === '>' ? value > Number(block.threshold) : value < Number(block.threshold);
      return { value, result };
    }
    trigger(event, run = true) {
      if (this.tasks.some(t => t.event === event)) return;
      const blocks = this.program[event] || [];
      if (!blocks.length) { this.trace = `No hi ha ordres per a ${event === 'start' ? 'l’inici' : 'el botó ' + event}.`; return; }
      this.tasks.push({ event, frames: [{ blocks, index: 0, remaining: 1 }], wait: 0, timedMotor: false });
      this.running = run; this.budget = 0;
    }
    // Cada frame representa un cos de bucle o una branca; les condicions es tornen a llegir.
    next(task) {
      while (task.frames.length) {
        const frame = task.frames[task.frames.length - 1];
        if (frame.index >= frame.blocks.length) {
          if (frame.whileBlock) { task.frames.pop(); return frame.whileBlock; }
          if (frame.remaining > 1) { frame.remaining--; frame.index = 0; }
          else { task.frames.pop(); continue; }
        }
        if (!frame.blocks.length) { task.frames.pop(); continue; }
        return frame.blocks[frame.index++];
      }
      return null;
    }
    executeOne() {
      for (let attempt = 0; attempt < this.tasks.length; attempt++) {
        this.nextTask %= this.tasks.length;
        const task = this.tasks[this.nextTask++];
        if (task.wait > 0) continue;
        const block = this.next(task);
        if (!block) { this.tasks.splice(this.tasks.indexOf(task), 1); this.nextTask = 0; if (!this.tasks.length && !this.motor.speed && !this.motor.turn) this.trace = 'Programa acabat. Pots provar els botons A i B.'; return false; }
        if (++this.budget > 10000) { this.stop(); this.trace = 'Pausa després de 10.000 blocs. Revisa el programa i torna a executar.'; return false; }
        this.active = block.id;
        const seconds = clamp(block.seconds, .05, 10), power = clamp(block.power, 0, 100);
        this.trace = 'Executant: ' + ({face:'mostra cara',text:'mostra text',rgb:'llum RGB',forward:'avança',back:'enrere',left:'gira esquerra',right:'gira dreta',drive:'avança contínuament',stop:'atura motors',wait:'espera',repeat:'repeteix',forever:'per sempre'}[block.type] || block.type);
        switch (block.type) {
          case 'face': this.output.face = block.value || 'happy'; this.output.pattern = block.pattern; this.output.text = ''; break;
          case 'text': this.output.text = String(block.value || 'Hola').slice(0, 40); break;
          case 'rgb': this.output.rgb = block.value || '#22c55e'; break;
          case 'forward': case 'back':
            this.motor = { speed: power * 1.5 * (block.type === 'back' ? -1 : 1), turn: 0 };
            task.wait = seconds; task.timedMotor = true; break;
          case 'left': case 'right':
            this.motor = { speed: 0, turn: power * 2.4 * (block.type === 'left' ? -1 : 1) };
            task.wait = seconds; task.timedMotor = true; break;
          case 'drive': this.motor = { speed: power * 1.5, turn: 0 }; break;
          case 'stop': this.motor = { speed: 0, turn: 0 }; break;
          case 'wait': task.wait = seconds; break;
          case 'if': {
            const { value, result } = this.test(block);
            this.trace = `${block.sensor === 'obstacle' ? 'Obstacle' : block.sensor === 'light' ? 'Llum' : 'So'}: ${typeof value === 'boolean' ? (value ? 'sí' : 'no') : value} → condició ${result ? 'certa' : 'falsa'} → ${result ? 'aleshores' : 'si no'}`;
            task.frames.push({ blocks: result ? block.then : block.else, index: 0, remaining: 1 }); break;
          }
          case 'while': {
            const { value, result } = this.test(block);
            this.trace = `Mentre · ${block.sensor === 'obstacle' ? 'Obstacle' : block.sensor === 'light' ? 'Llum' : 'So'}: ${typeof value === 'boolean' ? (value ? 'sí' : 'no') : value} → condició ${result ? 'certa: repetim' : 'falsa: continuem després del bucle'}`;
            if (result) task.frames.push({ blocks: block.body || [], index: 0, remaining: 1, whileBlock: block });
            break;
          }
          case 'repeat': case 'forever':
            task.frames.push({ blocks: block.body || [], index: 0, remaining: block.type === 'forever' ? Infinity : clamp(block.count, 1, 100) }); break;
        }
        return true;
      }
      return false;
    }
    elapse(dt) {
      this.clock += dt;
      this.pose.angle = (this.pose.angle + this.motor.turn * dt + 360) % 360;
      const a = this.pose.angle * Math.PI / 180;
      const x = this.pose.x + Math.cos(a) * this.motor.speed * dt, y = this.pose.y + Math.sin(a) * this.motor.speed * dt;
      const blocked = x < R || y < R || x > WIDTH - R || y > HEIGHT - R || this.environment.obstacles.some(b => intersects(x, y, b));
      this.collision = blocked && this.motor.speed !== 0;
      if (!blocked) { this.pose.x = x; this.pose.y = y; }
      if (this.collision) this.trace = 'Contacte amb un obstacle o la vora. El robot no pot travessar-los.';
      for (const task of this.tasks) if (task.wait > 0) {
        task.wait = Math.max(0, task.wait - dt);
        if (task.wait < 1e-8) { task.wait = 0; if (task.timedMotor) this.motor = { speed: 0, turn: 0 }; task.timedMotor = false; }
      }
    }
    tick(dt, interval = .3) {
      if (!this.running) return;
      let remaining = clamp(dt, 0, .1);
      while (remaining > 1e-8) {
        const slice = Math.min(remaining, .02); this.elapse(slice); remaining -= slice;
        this.accumulator += slice;
        if (this.accumulator >= interval) { this.accumulator = 0; this.executeOne(); }
      }
      if (!this.tasks.length && this.motor.speed === 0 && this.motor.turn === 0) this.running = false;
    }
    step() {
      this.running = false;
      if (!this.tasks.length) this.trigger('start', false);
      // Acaba les esperes pendents; després executa exactament un bloc lògic.
      if (this.tasks.length && this.tasks.every(t => t.wait > 0)) {
        const seconds = Math.min(...this.tasks.map(t => t.wait));
        for (let t = 0; t < seconds; t += .02) this.elapse(Math.min(.02, seconds - t));
      }
      this.executeOne();
      const waits = this.tasks.filter(t => t.wait > 0).map(t => t.wait);
      if (waits.length) for (let t = 0, duration = Math.min(...waits); t < duration; t += .02) this.elapse(Math.min(.02, duration - t));
    }
  }
  return { Engine, WIDTH, HEIGHT, R };
});
