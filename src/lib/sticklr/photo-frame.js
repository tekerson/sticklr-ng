export default function photoFrame () {
  let photo = null;

  return ({
    photo: () => photo,

    changePhoto,
    reset
  });

  function changePhoto (dataURI) {
    photo = dataURI;
  }

  function reset () {
    photo = null;
  }
}
