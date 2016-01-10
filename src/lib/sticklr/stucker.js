export default function Stucker ({location, dataURI}) {
  return ({
    get location () { return location; },
    get dataURI () { return dataURI; }
  });
}
