import angular from 'angular';

import './app.less';

import 'sticklr-ng';

export default angular.module('App', ['sticklr'])
  .controller('AppCtrl', ['stkPhotoFrame', 'stkStickerAlbum', 'eventEmitter', Ctrl])
  .factory('eventEmitter', ['$rootScope', EventEmitter]);

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
