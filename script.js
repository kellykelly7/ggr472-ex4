// access tokens for map
mapboxgl.accessToken = 'pk.eyJ1Ijoia2VsbHlrZWxseTciLCJhIjoiY202aWNjdDE5MDcwbTJrcHppYWw5ZjJzcCJ9.pry2p-gu8qXteiF0TWa4dw';

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/kellykelly7/cm6iflyxt00tz01qm2kqy3dg3',
    center: [-79.398526, 43.662804],
    zoom: 14.5,
});

map.on('load', () => {
    // Add a data source containing GeoJSON data
    map.addSource('uoft-data', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
            {
                "type": "Feature",
                "properties": {
                    "name": "Sidney Smith Hall"
                },
                "geometry": {
                    "coordinates": [
                        -79.39865237301687,
                        43.662343395037766
                    ],
                    "type": "Point"
                }
            }
        ]
    }
})

    map.addLayer({
        'id': 'uoft-pnt',
        'type': 'circle',
        'source': 'uoft-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }
    });

    map.addSource('buildings-data', {
        type: 'geojson',
        data:'https://github.com/kellykelly7/ggr472-ex4/blob/main/buildings.geojson'
    });

    map.addLayer ({
        'id': 'buildings-point',
        'type': 'circle', 
        'source': 'buildings-data', 
        'paint': {
            'circle-radius': 5,
            'circle-color': '#007cbf'
        }
    })
});