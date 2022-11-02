var platform = new H.service.Platform({
  apikey: "oZYa2V1GPOD0g1xWfncJW2_iJ38XpcTaF1PFgKVGDAc",
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById("mapContainer"),
  defaultLayers.vector.normal.map,
  {
    zoom: 8,
    center: { lat: 46.1, lng: 6.905579 },
  }
);

// This adds a resize listener to make sure that the map occupies the whole container
window.addEventListener("resize", () => map.getViewPort().resize());

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var ui = H.ui.UI.createDefault(map, defaultLayers);

var pngIcon = new H.map.Icon("media/ski-icon/icon.png", {
  size: { w: 56, h: 56 },
});

// Marker code

function addMarkersTomap(map) {
  if (document.title === "Tignes") {
    var tignesMarker = new H.map.Marker(
      {
        lat: 45.468323,
        lng: 6.905579,
      },
      {
        icon: pngIcon,
      }
    );
    map.addObject(tignesMarker);
  } else if (document.title === "Morzine") {
    var morzineMarker = new H.map.Marker(
      {
        lat: 46.179192,
        lng: 6.7088770000000295,
      },
      {
        icon: pngIcon,
      }
    );
    map.addObject(morzineMarker);
  } else if (document.title === "La Tania") {
    var laTaniaMarker = new H.map.Marker(
      {
        lat: 45.431731,
        lng: 6.594989,
      },
      {
        icon: pngIcon,
      }
    );
    map.addObject(laTaniaMarker);
  } else {
    var tignesMarker = new H.map.Marker(
      {
        lat: 45.468323,
        lng: 6.905579,
      },
      {
        icon: pngIcon,
      }
    );
    map.addObject(tignesMarker);

    var morzineMarker = new H.map.Marker(
      {
        lat: 46.179192,
        lng: 6.7088770000000295,
      },
      {
        icon: pngIcon,
      }
    );
    map.addObject(morzineMarker);

    var laTaniaMarker = new H.map.Marker(
      {
        lat: 45.431731,
        lng: 6.594989,
      },
      {
        icon: pngIcon,
      }
    );
    map.addObject(laTaniaMarker);
  }
}

window.onload = function () {
  addMarkersTomap(map);
};
