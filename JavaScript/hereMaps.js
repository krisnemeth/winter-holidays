//Step 1: initialize communication with the platform
// Replace variable YOUR_API_KEY with your own apikey
var platform = new H.service.Platform({
  apikey: "i5KOpWaqt2nRJk9m0SHClw",
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe

var map = new H.Map(
  document.getElementById("mapContainer"),
  defaultLayers.vector.normal.map,
  {
    center: { lat: 45.49604, lng: 6.92463 },
    zoom: 4,
    pixelRatio: window.devicePixelRatio || 1,
  }
);



// add a resize listener to make sure that the map occupies the whole container

window.addEventListener("resize", () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Marker code goes here
var LocationOfMarker = { lat: 55.8632, lng: -4.2447 };
// var LocationOfNewMarker = { lat: 55.8521881490119, lng: -4.249064545180804 };

// optionally - resize a larger PNG image to a specific size
// var pngIcon = new H.map.Icon(
//   "https://cdn3.iconfinder.com/data/icons/tourism/eiffel200.png",
//   { size: { w: 56, h: 56 } }
// );
// var pngIcon = new H.map.Icon(
//   "/media/ski-icon/icon.png",
//   { size: { w: 56, h: 56 } }
// );

// Create a marker using the previously instantiated icon:
var marker = new H.map.Marker(LocationOfMarker, { icon: pngIcon });
// var newMarker = new H.map.Marker(LocationOfNewMarker, { icon: pngIcon });

// Instantiate a circle object (using the default style):
var circle = new H.map.Circle({ lat: 45.49604, lng: 6.92463 }, 4500);

// Add the marker to the map:
map.addObject(marker);
// map.addObject(newMarker);

// Add the circle to the map:
// map.addObject(circle);

// Optionally,
//Show the marker in the center of the map
// map.setCenter(LocationOfMarker);
// map.setCenter(LocationOfNewMarker);

//Zooming so that the marker can be clearly visible
map.setZoom(8);
