import angular from 'angular';

import './app.less';

import 'sticklr-ng/components';

import StickerAlbum from 'sticklr/sticker-album';
import PhotoFrame from 'sticklr/photo-frame';

export default angular.module('App', ['stkComponents'])
  .controller('AppCtrl', ['photoFrame', 'stickerAlbum', 'eventEmitter', Ctrl])
  .factory('eventEmitter', ['$rootScope', EventEmitter])
  .factory('stickerAlbum', [StickerAlbum])
  .factory('photoFrame', [PhotoFrame]);

function Ctrl (photo, album, events) {
  return ({
    get photo () { return photo.photo(); },
    get stickers () { return album.stickers(); },

    preview: photo.changePhoto,
    reset: photo.reset,
    error: events.emit.bind(null, 'ERROR'),

    addSticker: album.addSticker
  });
}

function EventEmitter ($rootScope) {
  return ({
    emit (type, event) {
      $rootScope.$emit({
        _type: type,
        event
      });
    }
  });
}
