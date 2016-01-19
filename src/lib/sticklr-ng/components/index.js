import angular from 'angular';

import stkCollage from './collage';
import stkFileInput from './file-input';
import stkMediaList from './media-list';
import stkStickerUploadForm from './sticker-upload-form';

export default angular.module('stkComponents', [])
  .directive('stkCollage', [stkCollage])
  .directive('stkFileInput', ['$sce', stkFileInput])
  .directive('stkMediaList', ['$sce', stkMediaList])
  .directive('stkStickerUploadForm', [stkStickerUploadForm])
;
