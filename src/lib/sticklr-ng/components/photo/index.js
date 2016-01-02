/*global FileReader */

import template from './template.html';
import './style.less';

export default function () {
  return ({
    restrict: 'E',
    scope: {
      src: '@'
    },

    controllerAs: 'vm',
    controller: Ctrl,

    link,
    template
  });
};

const Ctrl = () => ({
});

const link = (scope, element, attrs, vm) => {
};
