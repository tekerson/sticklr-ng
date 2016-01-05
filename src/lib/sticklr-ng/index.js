import angular from 'angular';

import StickerAlbum from 'sticklr/sticker-album';
import PhotoFrame from 'sticklr/photo-frame';

import './components';

export default angular.module('sticklr', ['stkComponents'])
  .factory('stkStickerAlbum', [StickerAlbum])
  .factory('stkPhotoFrame', [PhotoFrame]);
