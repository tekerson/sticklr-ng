import angular from 'angular';

import FileInput from './file-input';
import Photo from './photo';

export default angular.module('stkComponents', [])
  .directive('stkFileInput', ['$sce', FileInput])
  .directive('stkPhoto', [Photo])
;
