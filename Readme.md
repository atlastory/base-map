# Atlastory Base Map

__Atlastory is the visualization of history on a map.__ The goal is to create a free interactive web map that spans all of history, with the ability to see what the world looked like 20, 50, or 1,000 years+ in the past. For further discussion and collaboration outside of GitHub, visit [forum.atlastory.com](http://forum.atlastory.com/).

This is the Atlastory Base Map, a political and cultural map that spans human history. To contribute, Fork the repo and issue a pull request.

## Structure:

* __Layers__ -- each folder is a map layer (i.e. countries, states, cities, highways, etc.).
* __Time periods__ -- each layer folder contains time periods for that data. Periods can be any length in 1-year intervals. Period folders can be changed to whatever necessary as the map data changes over time. (Years begin and end on January 1. So the folder '1940-1945' goes from January 1, 1940 to January 1, 1945.)
* __Map data__ -- in each period folder, there should be up to 10 GeoJSON files that contain the geometry for that layer/period. Projection is always WGS 84 (4326).

GeoJSON split:

1. `north-america.geojson`: North America (+Greenland)
2. `central-america.geojson`: Central America (+Caribbean)
3. `south-america.geojson`: South America
4. `africa.geojson`: Africa
5. `europe.geojson`: Europe
6. `middle-east.geojson`: Middle East
7. `central-asia.geojson`: Central Asia (+Russia)
8. `asia.geojson`: Asia (+Southeast Asia)
9. `oceania.geojson`: Australia, NZ, Pacific
10. `antarctica.geojson` : Antarctica

