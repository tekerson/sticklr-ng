/*global FileReader */
import template from './template.html';
import './style.less';

export default function ($sce) {
  return ({
    restrict: 'E',
    scope: {
      media: '=',
      extractThumbSrc: '&?thumbSrc',
      extractTitle: '&?title'
    },

    link: link($sce),
    template
  });
};

function link ($sce) {
  return (scope, element, attrs, vm) => {
    const extractTitle = scope.extractTitle;
    const extractThumbSrc = scope.extractThumbSrc;

    scope.titleFrom = (iterationScope) =>
      (typeof extractTitle === 'function') ? extractTitle(iterationScope) : `Item #${iterationScope.$index + 1}`;

    scope.thumbSrcFrom = (iterationScope) =>
      (typeof extractThumbSrc === 'function') ? extractThumbSrc(iterationScope) : iterationScope.medium;

    scope.encodeData = (data) => $sce.getTrustedResourceUrl(data.dataURI);
  };
}
