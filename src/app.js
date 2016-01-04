import angular from 'angular';

import './app.less';

import 'sticklr-ng/components';

export default angular.module('App', ['stkComponents'])
  .controller('AppCtrl', Ctrl);

function Ctrl () {
  let photo = null;
  let stickers = [];

  return ({
    get photo () { return photo; },
    get stickers () { return stickers; },

    preview,
    reset,

    addSticker
  });

  function preview (dataURI) {
    photo = dataURI;
  }

  function reset () {
    photo = null;
  }

  function addSticker (sticker) {
    stickers = [...stickers, sticker];
  }
}
