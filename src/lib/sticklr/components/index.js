import ng from 'angular';

import FileInput from './file-input';

export default ng.module('stkComponents', [])
  .directive('stkFileInput', [FileInput]);
;
