// *********************************************************************
// Look things up in the documentation and tell me what everything does!
// *********************************************************************

L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';
var map = L.mapbox.map('map', 'examples.map-20v6611k').setView([38.12367, -76.81229], 9);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geojson = {
    type: 'FeatureCollection',


    // This is an array of Map Point objects
    features: [
	
	
	
    {
        type: 'Feature',
        properties: {
            title: 'Philadelphia, PA',
			description: 'Fresh Prince of Bel Air <img src="http://www.wallpaperup.com/uploads/wallpapers/2014/04/16/334587/big_thumb_8bdfbfd19dae55e8dd6c39910015b66d.jpg"class="popupimage" /> ',
            'marker-color': '#66ff00',
            'marker-size': 'large',
            'marker-symbol': 'garden',
        },
        geometry: {
            type: 'Point',
            coordinates: [-75.17, 39.9]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Miami, FL',
            description: 'Miamiiiiiiiiiiiiiiiiii',
            'marker-color': '#ffff00',
            'marker-size': 'large',
            'marker-symbol': 'ice-cream',
        },
        geometry: {
            type: 'Point',
            coordinates: [-80.19, 25.76]
        }
    },
        {
        type: 'Feature',
        properties: {
            title: 'Los Angeles, CA',
            'description': 'Los Angeles: where the stars are!<img src="http://americaninsights.org/wp-content/uploads/2014/06/hollywood.jpg" class="popupimage" /> ',
            'marker-color': '#330066',
            'marker-size': 'large',
            'marker-symbol': 'cinema',
        },
        geometry: {
            type: 'Point',
            coordinates: [-118.24, 34.05]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Boston, MA',
            description: 'Yankees and Ivy League <img src="http://www.aede-laweconomics.org/wp-content/uploads/2012/06/harvard-courses1.jpg" class="popupimage" /> ',
            'marker-color': '#00ccff',
            'marker-size': 'large',
            'marker-symbol': 'industrial',
        },
        geometry: {
            type: 'Point',
            coordinates: [-71.05, 42.36]
        }
    },

	    {
        type: 'Feature',
        properties: {
            title: 'Las Vegas, NV',
            description: 'What happens in Vegas stays in Vegas <img src="https://beersnobsquad.files.wordpress.com/2015/05/vegas2.jpg" class="popupimage" /> ',
            'marker-color': '#6800ff',
            'marker-size': 'large',
            'marker-symbol': 'star',
        },
        geometry: {
            type: 'Point',
            coordinates: [-115.14, 36.17]
        }
    },
	
	
	
	
	
	
	
    ]
};

myLayer.setGeoJSON(geojson); // Adds all of the markers to the map

map.on('ready', function() {
    // featureLayer.getBounds() returns the corners of the furthest-out markers,
    // and map.fitBounds() makes sure that the map contains these.
    map.fitBounds(myLayer.getBounds());
});