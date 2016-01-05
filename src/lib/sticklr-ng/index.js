import angular from 'angular';

import Collage from 'sticklr/collage';
import PhotoFrame from 'sticklr/photo-frame';
import Sticker from 'sticklr/sticker';
import StickerAlbum from 'sticklr/sticker-album';

import './components';

export default angular.module('sticklr', ['stkComponents'])
  .factory('stkCollage', ['stkPhotoFrame', Collage])
  .factory('stkPhotoFrame', [PhotoFrame])
  .factory('stkStickerAlbum', [StickerAlbum])
  .factory('stkSticker', [Sticker])
;
