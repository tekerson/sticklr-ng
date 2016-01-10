import Stucker from './stucker';

export default function Collage (photoFrame) {
  let stuckers = [];

  return ({
    stuckers: () => stuckers,

    background: photoFrame.photo,
    changeBackground: photoFrame.changePhoto,
    reset,
    stick
  });

  function reset () {
    photoFrame.reset();
    stuckers = [];
  }

  function stick (location, dataURI) {
    const stucker = Stucker({location, dataURI});
    stuckers = [...stuckers, stucker];
  }
}
