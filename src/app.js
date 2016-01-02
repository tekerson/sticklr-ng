import angular from 'angular';

import './app.less';

import 'sticklr-ng/components';

let photo;

export default angular.module('App', ['stkComponents'])
  .controller('AppCtrl', ($scope) => ({
    preview,
    currentPhoto,
    restart
  }));

const preview = (dataURI) => {
  photo = dataURI;
};

const currentPhoto = () => photo;

const restart = () => {
  photo = undefined;
};
