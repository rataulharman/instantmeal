## Overview  
This project uses the Geolocation API and Mapbox Maps API to display the user’s live device location on an interactive map. When location access is granted, the map centers on the user and a marker updates automatically as their position changes. This demonstrates real-time tracking functionality similar to what a food-delivery service would use.


## Features  
- Uses **Mapbox GL JS** for map rendering  
- Uses the **Browser Geolocation API** for real-time tracking  
- Marker updates as the user moves  
- Map controls disabled for a clean tracking-style view.

## Live Website    
**[Click Here](https://rataulharman.github.io/instantmeal/)**

## APIs Used  
### Mapbox Maps API  
Displays the interactive map and marker.

## How It Works  
1. The user allows location access.  
2. `watchPosition()` sends continuous updates.  
3. The map centers on the user’s coordinates.  
4. The marker moves in real time as the device moves.  
5. Errors are handled if permission is denied or location fails.

## Author  
**Harmandeep Singh**  
Manitoba Institute of Trades and Technology (MITT)