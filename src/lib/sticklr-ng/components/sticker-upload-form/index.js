/*global FileReader */

import template from './template.html';
import './style.less';

import Sticker from 'sticklr/sticker';

export default () => ({
  restrict: 'E',
  scope: {
    stickerCreated: '&?onStickerCreated'
  },

  controller: ctrl,
  controllerAs: 'vm',

  link,
  template
});

function link (scope, element, attrs, ctrl) {
  if (scope.stickerCreated) {
    ctrl.onSave((sticker) => scope.stickerCreated({sticker}));
  }
}

function ctrl () {
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
    stickerCreated(Sticker(sticker));
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
}

function newSticker () {
  return ({
    title: '',
    dataURI: undefined
  });
}

function isValid (sticker) {
  if (sticker.dataURI == null) {
    return false;
  }
  if (sticker.title == null) {
    return false;
  }
  return true;
}
