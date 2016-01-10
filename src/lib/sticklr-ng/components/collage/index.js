/*global FileReader */

import template from './template.html';
import './style.less';

export default () => ({
  restrict: 'E',
  scope: {
    stuckers: '='
  },
  transclude: true,

  template
});
