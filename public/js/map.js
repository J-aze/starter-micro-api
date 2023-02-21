var map = L.map("map", {
  crs: L.CRS.Simple,
  //   minZoom: -2,
});
var bounds = [
  [-14, -22],
  [1021.5, 1023],
];
var image = L.imageOverlay("img/galaxy.png", bounds).addTo(map);

map.fitBounds(bounds);
var sol = L.latLng([145, 175.2]);
L.marker(sol).addTo(map);
// map.setView([70, 120], 1);

function goTo(x, y) {
  var point = L.latLng([x, y]);
  L.marker(point).addTo(map);
  map.setView([x, y], 1);
}
