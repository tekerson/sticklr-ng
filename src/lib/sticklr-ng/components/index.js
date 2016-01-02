import angular from 'angular';

import FileInput from './file-input';
import Photo from './photo';
import MediaList from './media-list';

export default angular.module('stkComponents', [])
  .directive('stkFileInput', ['$sce', FileInput])
  .directive('stkMediaList', [MediaList])
  .directive('stkPhoto', [Photo])
;
