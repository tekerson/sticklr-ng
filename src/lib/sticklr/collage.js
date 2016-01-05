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

  function stick (sticker) {
    stickers = [...stickers, sticker];
  }
}
