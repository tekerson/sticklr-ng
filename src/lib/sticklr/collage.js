import stucker from './stucker';

export default () => {
  let stuckers = [];
  let background = null;

  return ({
    stuckers: () => stuckers,
    background: () => background,

    changeBackground,
    reset,
    stick
  });

  function reset () {
    background = null;
    stuckers = [];
  }

  function changeBackground (photo) {
    background = photo;
  }

  function stick (location, dataURI) {
    stuckers = [...stuckers, stucker({location, dataURI})];
  }
};
