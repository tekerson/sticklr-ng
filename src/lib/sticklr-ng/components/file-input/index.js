/*global FileReader */

import template from './template.html';
import './style.less';

export default ($sce) => ({
  restrict: 'E',
  scope: {
    fileLoaded: '&?onFileLoaded'
  },
  transclude: true,

  link: link($sce),
  template
});

function link ($sce) {
  return (scope, element, attrs, ctrl) => {
    const fileInput = element[0];

    const fileLoaded = scope.fileLoaded
            ? (dataURI) => scope.fileLoaded({dataURI})
            : () => {};

    fileInput.addEventListener('change', (ev) => {
      readFile(ev.target.files)
        .then(dataURI => scope.$apply(fileLoaded($sce.trustAsResourceUrl(dataURI))))
        .catch(fileLoadError);
    });

    function fileLoadError (err) {
      // FIXME handle error
      console.error(err);
    }
  };
}

function readFile (files) {
  return new Promise((resolve, reject) => {
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
}
