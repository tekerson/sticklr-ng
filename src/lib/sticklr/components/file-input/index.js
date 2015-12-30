import template from './index.html.ng';

export default function () {
  return ({
    restrict: 'E',
    scope: {},

    controllerAs: 'vm',
    controller: Ctrl,

    link,
    template
  });

  function Ctrl () {
    var inputElement;

    return {
      select () {
        inputElement.click();
      },
      setInputElement (element) {
        inputElement = element;
      }
    };
  }

  function link (scope, element, attrs, vm) {
    let el = document.createElement('input');
    el.setAttribute('type', 'file');
    el.addEventListener('change', function () {
      console.log('SELECTED!');
    });
    vm.setInputElement(el);
  }
};
