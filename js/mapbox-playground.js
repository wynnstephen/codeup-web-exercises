const mapboxToken = 'pk.eyJ1Ijoid3lubnN0ZXBoZW4iLCJhIjoiY2twcG44ZGJiMDJtbTJ1cGZiOXFlbHQxaSJ9.5OtxyKlsQ8leAWW4EQnmnA'

mapboxgl.accessToken = mapboxToken;

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [-97.1081, 32.7357],
    zoom: 12
})

let marker = setMarker([-97.1081, 32.7357])

addMapEvent(marker);

// creat new geocoder and assign to variable
let geocoder = setGeocoder();
addGeocoderToMap(geocoder);
addGeocoderEvent(geocoder);
setPopup("this is a my popup! woo!");

// creates and returns a new GeoCoder (search box)
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

function setMarker(point) {

    return new mapboxgl.Marker().setLngLat(point).addTo(map);

}

function addMapEvent(marker) {
    map.on('click', function (event) {
        marker.setLngLat(event.lngLat).addTo(map);
    })
}

function setPopup(textDetails) {
    let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);

    marker.setPopup(popup);
}