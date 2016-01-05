import angular from 'angular';

import './app.less';

import 'sticklr-ng/components';

import stickerAlbum from 'sticklr/sticker-album';
import photoFrame from 'sticklr/photo-frame';

export default angular.module('App', ['stkComponents'])
  .controller('AppCtrl', ['photoFrame', 'stickerAlbum', 'eventEmitter', ctrl])
  .factory('eventEmitter', ['$rootScope', eventEmitter])
  .factory('stickerAlbum', [stickerAlbum])
  .factory('photoFrame', [photoFrame]);

function ctrl (photoFrame, stickerAlbum, events) {
  return ({
    get photo () { return photoFrame.photo(); },
    get stickers () { return stickerAlbum.stickers(); },

    preview: photoFrame.changePhoto,
    reset: photoFrame.reset,
    error: events.emit.bind(null, 'ERROR'),

    addSticker: stickerAlbum.addSticker
  });
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
