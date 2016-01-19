import test from 'tape';

import mkAlbum from './sticker-album';
import mkSticker from './sticker';

withUnit('There are no initial stickers', (t, unit) => {
  t.equal(unit.stickers().length, 0);
  t.end();
});

withUnit('Sticking a sticker adds a Stucker', (t, unit) => {
  const title = 'Some sticker';
  const dataURI = 'data:something';
  const sticker = mkSticker(title, dataURI);

  unit.addSticker(sticker);

  t.equal(unit.stickers().length, 1);
  t.end();
});

function withUnit (description, fn) {
  test(description, (t) => {
    const sut = mkAlbum();
    fn(t, sut);
  });
}
