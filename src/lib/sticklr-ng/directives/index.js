import angular from 'angular';

import stkDraggable from './draggable';
import stkDropTarget from './drop-target';

angular.module('stkDirectives', [])
  .directive('stkDraggable', [stkDraggable])
  .directive('stkDropTarget', ['$parse', stkDropTarget])
;
