# Atlastory Base Map

__Atlastory is the visualization of history on a map.__ The goal is to create a free interactive web map that spans all of history, with the ability to see what the world looked like 20, 50, or 1,000 years+ in the past. For further discussion and collaboration outside of GitHub, visit [forum.atlastory.com](http://forum.atlastory.com/).

This is the Atlastory Base Map, a political and cultural map that spans human history. To contribute, Fork the repo and issue a pull request.

---------------------------------------
## Contributing

Please read the [Contributor Agreement](Agreement.md) before making any contributions. Below is more detail on the structure of this repo and the base map in general.

#### [Best practices >>](Best-Practices.md)

### Structure:

```
├── africa
├── asia
│   ├── admin-1
│   │   ├── 1871-1900.geojson
│   │   └── 1900-1910.geojson
│   └── admin-2
│       └── 1900-1920.geojson
├── central-america
└── central-asia
```

1. __Regions__ — the region of the world
2. __Types__ — each folder is a map type level
3. __Time periods__ — each type folder has GeoJSONs representing the time period for that data

### (1) Regions

General split lines:

![](./_img/regions.png?raw=true)

1. `north-america`: North America (+Greenland)
2. `central-america`: Central America (+Caribbean)
3. `south-america`: South America
4. `africa`: Africa
5. `europe`: Europe
6. `middle-east`: Middle East
7. `central-asia`: Central Asia (+Russia)
8. `asia`: Asia (+Southeast Asia)
9. `oceania`: Australia, NZ, Pacific
10. `antarctica` : Antarctica

Each region will later be combined to form a global map. So the split doesn't need to be exactly down these lines -- as long as 2 GeoJSON files in the same period don't replicate a shape. So Ukraine can be included in `central-asia` in one period and `europe` in another.

### (2) Shape types (`level-name` *object type* — Shape type(s))

* `admin-1` *polygon* — sovereignty, country, dependency, colony
* `admin-2` *polygon* — state, province, republic, ...
* `admin-3` *polygon* — county, ...
* `settlement` *point* — city, capital-[1-3], town, village

### (3) Time periods (GeoJSON)

* Must be in __GeoJSON__ format (projection is always WGS 84 (4326))
* Periods can be __any length__ in 1-year intervals.
* Years begin and end on __January 1__. So the file `1940-1945` goes from January 1, 1940 to January 1, 1945. The file `1945-1946` spans the one-year period January 1, 1945 to January 1, 1946.
* Periods can be changed to whatever necessary as the map data changes over time.
* Periods should __never overlap__ within the same type.
	* Correct:  `1850-1855`, `1855-1861`, `1861-1864`, `1875-1880`
	* Incorrect: `1850-1855`, `1853-1861`, `1860-1864`, `1875-1880`

#### Common data attributes:

* `name` full name
* `name_md` medium name abbreviation <= 17 characters
* `name_sm` short name abbreviation <=5 characters
* `type` see '__Shape types__' above (sovereignty, city, etc.)
* `sovereignty` full name of sovereign country (if applicable)
* `description`
* `date_start` specific start date YYYY-MM-DD of object (if present)
* `date_end` specific end date YYYY-MM-DD of object (if present)
* `_color` (required for `admin-1` shape type) specify the number representing the color of the sovereignty's tint band
    1. Turquoise
    2. Green
    3. Lime
    4. Yellow
    5. Orange
    6. Red
    7. Purple



