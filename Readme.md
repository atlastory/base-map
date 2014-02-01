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

# Contributor Terms

By issuing a pull request to this repository, you agree to the following:

Thank you for your interest in contributing data and/or any other content (collectively, 'Contents') to the geo-database of the Atlastory map (the 'Map'). This contributor agreement (the 'Agreement') is made between you ('You') and Atlastory, Inc. ('Atlastory') and clarifies the intellectual property rights in any Contents that You choose to submit to the Map in this user account. Please read the following terms and conditions carefully and click either the 'Accept' or 'Decline' button at the bottom to continue.

### Introduction

We respect the intellectual property rights of others and we need to be able to respond to any objections by intellectual property owners. This means that:

1. Your contribution of data should not infringe the intellectual property rights of anyone else. If you contribute Contents, You are indicating that, as far as You know, You have the right to authorize Atlastory to use and distribute those Contents under our current licence terms. If You do not have that right, You risk having Your contribution deleted (see below).
2. Please note that Atlastory does not have to include Contents You contribute to the Map, and may remove Your contributions from the Map at any time. For example, if we suspect that any contributed data is incompatible, (in the sense that we could not continue to lawfully distribute it), with whichever licence or licences we are then using, then we may delete that data.

### Rights Granted

1. You hereby grant to Atlastory a worldwide, royalty-free, non-exclusive, perpetual, irrevocable licence to do any act that is restricted by copyright, database right or any related right over anything within the Contents, whether in the original medium or any other. These rights explicitly include commercial use, and do not exclude any field of endeavour. These rights include, without limitation, the right to sub-license the work through multiple tiers of sub-licensees and to sue for any copyright violation directly connected with Atlastory’s rights under these terms. To the extent allowable under applicable local laws and copyright conventions, You also waive and/or agree not to assert against Atlastory or its licensees any moral rights that You may have in the Contents.
2. At Your or the copyright owner’s option, Atlastory agrees to attribute You or the copyright owner. A mechanism will be provided for this ability.
3. Except as set forth herein, You reserve all right, title, and interest in and to Your Contents.

### Limitation of Liability

1. To the extent permitted by applicable law, You provide the Contents 'as is' without warranty of any kind, either express or implied, including without limitation any warranties or conditions of merchantability, fitness for a particular purpose, or otherwise.
2. Subject to any liability that may not be excluded or limited by law, neither You nor Atlastory shall be liable for any special, indirect, incidental, consequential, punitive, or exemplary damages under this Agreement, however caused and under any theory of liability. This exclusion applies even if either party has been advised of the possibility of such damages.

### Miscellaneous

This Agreement shall be governed by English law without regard to principles of conflict of law. You agree that the United Nations Convention on Contracts for the International Sale of Goods (1980) is hereby excluded in its entirety from application to this Agreement. In the event of invalidity of any provision of this Agreement, the parties agree that such invalidity shall not affect the validity of the remaining portions of this Agreement. This is the entire agreement between You and Atlastory which supersedes any prior agreement, whether written, oral or other, relating to the subject matter of this agreement.

In addition to the above agreement, I consider my contributions to be in the Public Domain.

