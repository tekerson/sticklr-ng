import angular from 'angular';

import Collage from 'sticklr/collage';
import Sticker from 'sticklr/sticker';
import StickerAlbum from 'sticklr/sticker-album';

import './components';
import './directives';

export default angular.module('sticklr', ['stkComponents', 'stkDirectives'])
  .factory('stkCollage', [Collage])
  .factory('stkStickerAlbum', [StickerAlbum])
  .factory('stkSticker', [Sticker])
;
