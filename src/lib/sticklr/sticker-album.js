export default function stickerAlbum () {
  let stickers = [];

  return ({
    stickers: () => stickers,

    addSticker
  });

  function addSticker (sticker) {
    stickers = [...stickers, sticker];
  }
}
