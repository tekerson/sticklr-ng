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

  function stick (stucker) {
    stuckers = [...stuckers, stucker];
  }
};
