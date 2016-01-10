export default ($parse) => ({
  restrict: 'A',

  link: link($parse)
});

function link ($parse) {
  return (scope, element, attrs, ctrl) => {
    const dropped = !attrs.onDrop
            ? () => {}
            : (location, data) => { $parse(attrs.onDrop)(scope, {location, data}); };

    element.on('dragover', handleDragOver);
    element.on('drop', handleDrop.bind(null, scope, dropped));
  };
}

function handleDrop (scope, callback, ev) {
  const raw = ev.dataTransfer.getData('application/json+offset');
  if (!raw) { return; }

  const offset = JSON.parse(raw);
  const image = ev.dataTransfer.getData('image/png');

  const location = {
    x: ev.clientX - offset.x,
    y: ev.clientY - offset.y
  };

  scope.$apply(callback(location, image));
  ev.preventDefault();
}

function handleDragOver (ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = 'copy';
  return false;
}
