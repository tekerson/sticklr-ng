import angular from 'angular';

import FileInput from './file-input';
import Photo from './photo';
import MediaList from './media-list';
import StickerUploadForm from './sticker-upload-form';

export default angular.module('stkComponents', [])
  .directive('stkFileInput', ['$sce', FileInput])
  .directive('stkMediaList', [MediaList])
  .directive('stkStickerUploadForm', [StickerUploadForm])
  .directive('stkPhoto', [Photo])
;
