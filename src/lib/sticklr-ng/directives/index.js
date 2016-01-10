import angular from 'angular';

import Draggable from './draggable';
import DropTarget from './drop-target';

angular.module('stkDirectives', [])
  .directive('stkDraggable', [Draggable])
  .directive('stkDropTarget', ['$parse', DropTarget])
;
