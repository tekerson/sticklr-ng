import './draggable.less';

export default () => ({
  restrict: 'A',
  link: link
});

function link (scope, element, attrs, ctrl) {
  const data = scope.$eval(attrs.stkDraggable);

  element.on('dragstart', (ev) => {
    ev.dataTransfer.effectAllowed = 'all';
    ev.dataTransfer.setData('application/json+offset', JSON.stringify({
      x: ev.layerX,
      y: ev.layerY
    }));
    ev.dataTransfer.setData('image/*', data);
  });
}
