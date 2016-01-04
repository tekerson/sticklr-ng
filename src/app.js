import angular from 'angular';

import './app.less';

import 'sticklr-ng/components';

let photo;
let stickers = [];

export default angular.module('App', ['stkComponents'])
  .controller('AppCtrl', ($scope) => ({
    preview,
    currentPhoto,
    restart,

    addSticker,
    allStickers
  }));

const preview = (dataURI) => {
  photo = dataURI;
};

const currentPhoto = () => photo;

const restart = () => {
  photo = undefined;
};

const addSticker = (sticker) => {
  stickers = [...stickers, sticker];
};

const allStickers = () => stickers;
