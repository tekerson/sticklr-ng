export default function Collage (photoFrame) {
  let stickers = [];

  return ({
    stickers: () => stickers,

    background: photoFrame.photo,
    changeBackground: photoFrame.changePhoto,
    reset,
    stick
  });

  function reset () {
    photoFrame.reset();
    stickers = [];
  }

  function stick (location, sticker) {
    stickers = [...stickers, {location, sticker}];
  }
}
