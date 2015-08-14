// *********************************************************************
// Look things up in the documentation and tell me what everything does!
// *********************************************************************

L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA'; // allows us to use the API
var map = L.mapbox.map('map', 'examples.map-20v6611k').setView([38.12367, -76.81229], 9); // initial position ([latitude, longitude], zoom))

var myLayer = L.mapbox.featureLayer().addTo(map); //allows us to use GeoJson

var geojson = {
    type: 'FeatureCollection',

    // This is an array of Map Point objects
    features: [
    
    {
        type: 'Feature',
        properties: { //describes title, description
            title: 'Bay Area, CA',
            description: 'There are FIFTEEN summer immersion programs in the Bay Area this year!',
            'marker-color': '#f9d62e',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: { //the marker is a point (also determines the location)
            type: 'Point',
            coordinates: [-122.419, 37.774]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'New York and Newark',
            description: 'Girls Who Code\'s first program was here in 2012!',
            'marker-color': '#eae374',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.0059, 40.7127837]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Seattle, WA',
            description: 'GWC is in Seattle for the second year!',
            'marker-color': '#BE9A6B',
            'marker-size': 'large',
            'marker-symbol': 'cafe',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.332, 47.606]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Miami, Florida',
            description: 'I hope all that sun doesn\'t melt the computers',
            'marker-color': '#7ec9b1',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-80.19, 25.76]
        }
    },
        {
        type: 'Feature',
        properties: {
            title: 'Los Angeles',
            description: 'In Los Angeles, everyone is a star!<br />-Denzel Washington<br /><img src="http://i.imgur.com/pLQpP1H.png" class="popupimage" /> ',
            'marker-color': '#fc913a',
            'marker-size': 'large',
            'marker-symbol': 'star',
        },
        geometry: {
            type: 'Point',
            coordinates: [-118.24, 34.05]
        }
    },
    //add washington DC and Chicao
    {
        type: 'Feature',
        properties: {
            title: 'Washington, DC',
            description: 'Hey, its the whitehouse!',
            'marker-color': '#9999CC',
            'marker-size': 'large',
            'marker-symbol': 'town-hall',
        },
        geometry: {
            type: 'Point',
            coordinates: [-77.03687070000001, 38.9071923]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Chicago, IL',
            description: 'Woooooot. I know literally nothing about Chicago!',
            'marker-color': '#FDE8D7',
            'marker-size': 'large',
            'marker-symbol': 'dog-park',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.62979819999998, 41.8781136]
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