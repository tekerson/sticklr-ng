import angular from 'angular';

import Collage from './collage';
import FileInput from './file-input';
import Photo from './photo';
import MediaList from './media-list';
import StickerUploadForm from './sticker-upload-form';

export default angular.module('stkComponents', [])
  .directive('stkCollage', [Collage])
  .directive('stkFileInput', ['$sce', FileInput])
  .directive('stkMediaList', ['$sce', MediaList])
  .directive('stkStickerUploadForm', [StickerUploadForm])
  .directive('stkPhoto', [Photo])
;
