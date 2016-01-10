import Stucker from './stucker';

export default function Collage () {
  let stuckers = [];
  let background = null;

  return ({
    stuckers: () => stuckers,
    background: () => background,

    changeBackground: changePhoto,
    reset,
    stick
  });

  function reset () {
    background = null;
    stuckers = [];
  }

  function changePhoto (photo) {
    background = photo;
  }

  function stick (location, dataURI) {
    const stucker = Stucker({location, dataURI});
    stuckers = [...stuckers, stucker];
  }
}
