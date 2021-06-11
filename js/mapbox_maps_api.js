const mapboxToken = 'pk.eyJ1Ijoid3lubnN0ZXBoZW4iLCJhIjoiY2twcjJtN2dsMDBkMDJwcXV4cm5sdndjMyJ9.y3YqCNi8V_tIQ5iNdkZjPw'

mapboxgl.accessToken = mapboxToken;

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-115.1734, 36.1156],
    zoom: 12
})

let marker = setMarker([-115.1734, 36.1156])

addMapEvent(marker);

let myGeoCoder = setGeocoder();
addGeocoderToMap(myGeoCoder);
addGeocoderEvent(myGeoCoder);
setPopup("Beef Wellington anyone?")

function setGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

function addGeocoderToMap(geocoder) {
    map.addControl(geocoder);
}

function addGeocoderEvent(geocoder) {
    geocoder.on("result", function (event) {
        console.log(event);
        marker.setLngLat(event.result.geometry.coordinates)
    })
}

function setMarker(dot) {
    return new mapboxgl.Marker().setLngLat(dot).addTo(map);
}

function addMapEvent(myMarker) {
    map.on('click', function (event){
        marker.setLngLat(event.lngLat).addTo(map);
    })
}

function setPopup(textDetails) {
    let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);

    marker.setPopup(popup);
}