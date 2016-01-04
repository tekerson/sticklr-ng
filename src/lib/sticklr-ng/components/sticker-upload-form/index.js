/*global FileReader */

import template from './template.html';
import './style.less';

export default function ($sce) {
  return ({
    restrict: 'E',
    scope: {
      stickerCreated: '&?onStickerCreated'
    },

    controller: Ctrl,
    controllerAs: 'vm',

    link,
    template
  });
};

const link = (scope, element, attrs, ctrl) => {
  if (scope.stickerCreated) {
    ctrl.onSave((sticker) => scope.stickerCreated({sticker}));
  }
};

function Ctrl () {
  let isOpen = false;
  let sticker = newSticker();
  let stickerCreated = () => {};

  return ({
    get sticker () { return sticker; },
    get isOpen () { return isOpen; },

    open,

    isValid,
    save,
    onSave,
    cancel
  });

  function open () {
    isOpen = true;
  }

  function cancel () {
    close();
    reset();
  }

  function save (sticker) {
    if (!isValid(sticker)) {
      return;
    }
    stickerCreated(sticker);
    close();
    reset();
  }

  function onSave (callback) {
    stickerCreated = callback;
  }

  function close () {
    isOpen = false;
  }

  function reset () {
    sticker = newSticker();
  }
};

const newSticker = () => ({
  title: '',
  dataURI: undefined
});

const isValid = (sticker) => {
  if (sticker.dataURI == null) {
    return false;
  }
  if (sticker.title == null) {
    return false;
  }
  return true;
};