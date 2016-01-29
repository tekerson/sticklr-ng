import test from 'tape';

import mkCollage from './collage';
import mkStucker from './stucker';

withCollage('There are no initial stickers', (t, c) => {
  t.equal(c.stuckers().length, 0);
  t.end();
});

withCollage('There is no initial background', (t, c) => {
  t.equal(c.background(), null);
  t.end();
});

withCollage('Changing the background changes the background', (t, c) => {
  const background = Symbol('NEW BACKGROUND');

  c.changeBackground(background);

  t.equal(c.background(), background);
  t.end();
});

withCollage('Sticking a sticker adds a Stucker', (t, c) => {
  const stucker = mkStucker({
    location: {x: 200, y: 50},
    dataURI: 'data:something'
  });

  c.stick(stucker);

  t.ok(c.stuckers().includes(stucker));
  t.end();
});

withCollage('Reset removes all Stuckers', (t, c) => {
  const location = {x: 200, y: 50};
  const dataURI = 'data:something';

  c.stick(location, dataURI);
  c.reset();

  t.equal(c.stuckers().length, 0);
  t.end();
});

withCollage('Reset removes the background', (t, c) => {
  const background = Symbol('NEW BACKGROUND');

  c.changeBackground(background);
  c.reset();

  t.equal(c.background(), null);
  t.end();
});

function withCollage (description, fn) {
  test(description, (t) => {
    const sut = mkCollage();
    fn(t, sut);
  });
}
