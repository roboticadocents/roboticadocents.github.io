"""Check real pushing semantics and repeated task boundaries, without rendering."""
import importlib.util
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location('kits', Path(__file__).parents[1] / 'generate-robot-paper-kits.py')
kits = importlib.util.module_from_spec(spec)
spec.loader.exec_module(kits)


class PushingTests(unittest.TestCase):
    def test_repeated_task_prepares_next_box(self):
        for spacing, base, goal in [(1, 'A R D A E', 3), (2, 'A A R R D A A E', 4)]:
            boxes = ' '.join(f'{chr(65+i*spacing)}2' for i in range(3))
            targets = ' '.join(f'{chr(65+i*spacing)}{goal}' for i in range(3))
            ex = {'Inici': 'A1 N', 'Resposta de control': f'REP3[{base}]', 'Capses': boxes, 'Metes': targets}
            states, _ = kits.simulate_objects(ex)
            length = len(kits.expand(base))
            for i in range(1, 4):
                self.assertEqual(states[i*length], (i*spacing, 0, 0))

    def test_cannot_pull_or_push_two_boxes(self):
        for start, code, boxes in [('B3 N', 'R', 'B2'), ('B1 N', 'A', 'B2 B3')]:
            with self.assertRaises(AssertionError):
                kits.simulate_objects({'Inici': start, 'Resposta de control': code, 'Capses': boxes, 'Metes': boxes})

    def test_every_authored_exercise(self):
        for prefix in kits.LABELS:
            kinds = kits.KINDS + (kits.TB_EXTRA if prefix == 'tb' else kits.CS_EXTRA)
            for number, kind in enumerate(kinds, 1):
                doc = kits.load(prefix, kind, number)
                self.assertEqual(len(doc['exercises']), 3)
                for ex in doc['exercises']:
                    if ex.get('Comparacio'):
                        kits.simulate(ex['Comparacio'], ex['Resposta de control'], ex.get('Funcio'))


class FunctionTests(unittest.TestCase):
    def test_calls_return_to_main_and_loop_repeats_only_body(self):
        self.assertEqual(kits.expand('A REP2[F] D A', 'A D A E'),
                         list('AADAEADAEDA'))
        self.assertEqual(kits.simulate('B1 N', 'A REP2[F] D A', 'A D A E')[-1], (4,3,1))

    def test_undefined_recursive_and_numeric_calls_rejected(self):
        for code, function in [('F', None), ('F', 'F'), ('F2', 'A')]:
            with self.assertRaises(ValueError):
                kits.expand(code, function)

    def test_edited_svg_is_used_without_overwriting_source(self):
        import tempfile
        import cairo
        import hashlib
        old_icons, old_ctx = kits.ICONS, kits.ctx
        try:
            with tempfile.TemporaryDirectory() as directory:
                kits.ICONS = Path(directory)
                source = kits.ICONS / 'repetir.svg'
                digests = []
                for shape in ['<circle cx="32" cy="32" r="20"/>', '<rect x="8" y="8" width="48" height="48"/>']:
                    content = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">{shape}</svg>'
                    source.write_text(content)
                    kits.icon_handles.clear()
                    surface = cairo.ImageSurface(cairo.FORMAT_ARGB32, 64, 64)
                    kits.ctx = cairo.Context(surface)
                    kits.symbol(0,0,64,'repeat')
                    digests.append(hashlib.sha256(surface.get_data()).hexdigest())
                    self.assertEqual(source.read_text(),content)
                self.assertNotEqual(*digests)
        finally:
            kits.ICONS, kits.ctx = old_icons, old_ctx
            kits.icon_handles.clear()


if __name__ == '__main__':
    unittest.main()
