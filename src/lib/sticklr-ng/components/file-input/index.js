/*global FileReader */

import template from './template.html';
import './style.less';

export default ($sce) => ({
  restrict: 'E',
  scope: {
    fileLoaded: '&onFileLoaded'
  },
  transclude: true,

  controllerAs: 'vm',
  controller: Ctrl,

  link: link($sce),
  template
});

const Ctrl = ($scope) => ({
  fileLoaded (dataURI) {
    $scope.fileLoaded({dataURI});
  },
  fileLoadError (err) {
    // FIXME handle error
    console.error(err);
  }
});

const link = ($sce) => (scope, element, attrs, vm) => {
  let fileInput = element[0];
  fileInput.addEventListener('change', (ev) => {
    readFile(ev.target.files)
      .then(dataURI => scope.$apply(
        vm.fileLoaded($sce.trustAsResourceUrl(dataURI))))
      .catch(vm.fileLoadError);
  });
};

const readFile = (files) => new Promise((resolve, reject) => {
  if (files.length === 0) {
    reject('No file to load');
    return;
  }

  // TODO handle mutiple?
  let file = files.item(0);

  // TODO make configurable (params?)
  if (!file.type.match('image.*')) {
    reject(new Error('Invalid file type'));
    return;
  }

  let reader = new FileReader();
  reader.onload = (ev) => {
    resolve(ev.target.result);
  };
  reader.readAsDataURL(file);
});
