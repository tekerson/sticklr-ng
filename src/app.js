import angular from 'angular';

import './app.less';

import 'sticklr-ng';

export default angular.module('App', ['sticklr'])
  .controller('AppCtrl', ['stkCollage', 'stkStickerAlbum', 'eventEmitter', Ctrl])
  .factory('eventEmitter', ['$rootScope', EventEmitter])
;

function Ctrl (collage, album, events) {
  return ({
    get photo () { return collage.background(); },
    get stickers () { return album.stickers(); },
    get stuckers () { return collage.stickers(); },

    changePhoto: collage.changeBackground,
    reset: collage.reset,
    error: events.emit.bind(null, 'ERROR'),

    addSticker: album.addSticker,
    stick: collage.stick
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
