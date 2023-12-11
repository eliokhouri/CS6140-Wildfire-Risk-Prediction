import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

let mapScale = 4000;
let californiaCenter = [-118, 39];
let geoGenerator;

// Must be [[lon, lat]]
let geoCircle = d3.geoCircle().radius(0.025).precision(1);

function setUpMap(geojson) {
  let projection = d3
    .geoEquirectangular()
    .scale(mapScale)
    .center(californiaCenter);
  geoGenerator = d3.geoPath().projection(projection);

  let map = d3
    .selectAll(".californiaMap")
    .selectAll("path")
    .data(geojson.features);
  map.enter().append("path").attr("d", geoGenerator).style("opacity", 1);
}

function drawCircles(circles, selectionAttrString, colorFunc) {
  let u = d3
    .selectAll(selectionAttrString)
    .selectAll("path")
    .data(
      circles.map(function (d) {
        geoCircle.center(d);
        return geoCircle();
      })
    );

  u.enter()
    .append("path")
    .merge(u)
    .attr("d", geoGenerator)
    .style("fill", (d) => colorFunc(d))
    .style("opacity", 0.5)
    .on("click", (d) => console.log(d.target.__data__));
}

function drawPoints(pointsObj) {
  console.log(pointsObj.negativeExamples.length)
  console.log(pointsObj.positiveExamples.length)
  drawCircles(pointsObj.ghcnStations, ".ghcnStations", () => "lime");
  drawCircles(pointsObj.lcdStations, ".lcdStations", () => "lime");
  drawCircles(
    pointsObj.negativeExamples,
    ".negativeExamples",
    () => "deepskyblue"
  );
  drawCircles(pointsObj.positiveExamples, ".positiveExamples", () => "red");
}

d3.json("http://localhost:8000/california.json").then((geojson) => {
  setUpMap(geojson);
  d3.json("http://localhost:8000/pointsToMap.json").then((points) => {
    drawPoints(points);
  });
});
