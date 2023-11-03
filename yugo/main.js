import {Feature, Map, View} from 'ol'; // map gen
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from "ol/proj"; // coords
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector"; // vector map
import {circular} from "ol/geom/Polygon";
import {Point} from "ol/geom";
import {Control} from "ol/control"; // location
import {Link} from "ol/interaction";
import {GeoJSON} from "ol/format";

const map = new Map({
  target: 'map-container',
  layers: [
      new VectorLayer({
          source: new VectorSource({
              format: new GeoJSON(),
              url: '../croatia-lines.geojson',
          }),
      }),
  ],
  view: new View({
    center: fromLonLat([0, 0]),
    zoom: 2
  })
});
const source = new VectorSource();
const layer = new VectorLayer({
  source: source,
});
map.addLayer(layer);

/*
//
//    Start of geolocation functionality
//

navigator.geolocation.watchPosition(
    function (pos) {
      // Extract user's current coordinates.
      const coords = [pos.coords.longitude, pos.coords.latitude];

      // Create a circular polygon representing the accuracy of the location.
      const accuracy = circular(coords, pos.coords.accuracy);

      // Clear previous location features from the vector source.
      source.clear(true);

      // Add the new location (accuracy polygon and point) as features to the source.
      source.addFeatures([
        new Feature(
            accuracy.transform('EPSG:4326', map.getView().getProjection())
        ),
        new Feature(new Point(fromLonLat(coords))),
      ]);
    },
    function (error) {
      // Display an alert if there's an error obtaining geolocation.
      alert(`ERROR: ${error.message}`);
    },
    {
      // Request the most accurate position available, typically from GPS.
      enableHighAccuracy: true,
    }
);

//
//    End of geolocation functionality
//


//
//    Start of locate me button functionality
//

// Create a new <div> element for the "Locate me" button
const locate = document.createElement('div');

// Set class names for styling and behavior in OpenLayers
locate.className = 'ol-control ol-unselectable locate';

// Add a button inside the <div> with the symbol "◎" and a title "Locate me"
locate.innerHTML = '<button title="Locate me">◎</button>';

// Add an event listener to the button
locate.addEventListener('click', function () {
  // Check if the source (containing geolocation features) is not empty
  if (!source.isEmpty()) {
    // Adjust the map's view to fit the extent of the source (user's location)
    // The zoom level is capped at 18, and the transition takes 500 milliseconds
    map.getView().fit(source.getExtent(), {
      maxZoom: 18,
      duration: 500,
    });
  }
});

// Add the "Locate me" button as a control to the OpenLayers map
map.addControl(
    new Control({
      element: locate, // Specify the HTML element (button) to be used as the control
    })
);

//
//    End of locate me button functionality
//
*/

//  TODO: Add compass functionality

map.addInteraction(new Link());
