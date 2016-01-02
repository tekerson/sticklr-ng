/*global FileReader */

import template from './template.html';
import './style.less';

export default function ($scope) {
  return ({
    restrict: 'E',
    scope: {
      media: '='
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
