import angular from 'angular';

import './app.less';

import 'sticklr-ng/components';

export default angular.module('App', ['stkComponents'])
  .controller('AppCtrl', ['eventEmitter', ctrl])
  .factory('eventEmitter', ['$rootScope', eventEmitter]);

function ctrl (events) {
  let photo = null;
  let stickers = [];

  return ({
    get photo () { return photo; },
    get stickers () { return stickers; },

    preview,
    error,
    reset,

    addSticker
  });

  function preview (dataURI) {
    photo = dataURI;
  }

  function error (msg) {
    events.emit('ERROR', { msg });
  }

  function reset () {
    photo = null;
  }

  function addSticker (sticker) {
    stickers = [...stickers, sticker];
  }
}

function eventEmitter ($rootScope) {
  return ({
    emit (type, event) {
      $rootScope.$emit({
        _type: type,
        event
      });
    }
  });
}
