export default () => {
  let stickers = [];

  return ({
    stickers: () => stickers,

    addSticker
  });

  function addSticker (sticker) {
    stickers = [...stickers, sticker];
  }
};
