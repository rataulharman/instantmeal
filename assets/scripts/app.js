"use strict";

mapboxgl.accessToken = "pk.eyJ1IjoiZ3VybGlua2F1ciIsImEiOiJjbHExYjM4cHUwNzE3MnBud25qNDlmc2VjIn0.Jeu9BD0h1vILAwXce8dQqw";

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [0, 0], 
    zoom: 15
});

const marker = new mapboxgl.Marker({
    color: "#4A2C2A"
});

const geoOptions = {
    enableHighAccuracy: true
};

function updateLocation(position) {
    const { latitude, longitude } = position.coords;

    map.setCenter([longitude, latitude]);
    marker.setLngLat([longitude, latitude]).addTo(map);

    console.log(`Latitude: ${latitude} | Longitude: ${longitude}`);
}

function locationError() {
    console.log("Unable to retrieve your location.");
}

function disableMapControl() {
    map.dragPan.disable();
    map.keyboard.disable();
    map.scrollZoom.disable();
    map.doubleClickZoom.disable();
    map.touchZoomRotate.disable();
}

function initTracking() {
    if (!navigator.geolocation) {
        console.log("Geolocation is not supported in this browser.");
        return;
    }

    navigator.geolocation.watchPosition(
        updateLocation,
        locationError,
        geoOptions
    );

    disableMapControl();
}

initTracking();
