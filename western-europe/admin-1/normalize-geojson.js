#!/usr/bin/env node

var fs = require("fs");

var args, file, json, key, value;

// Get GeoJSON file
args = process.argv;
args = (args[0] == 'node') ? args.slice(2) : args.slice(1);
file = args[0];
key = args[1] || null;
value = args[2] || '';

if (fs.existsSync(file)) json = fs.readFileSync(file) + '';
else return console.error('"' + file + '" not found!');

function coordReplace(key, value) {
    if (key == "coordinates") {
        return JSON.stringify(value);
    } else {
        return value;
    }
}

function replaceProperties(json) {
    var newJson = {}, newKey;
    for (var key in json) {
        newKey = key.toLowerCase();
        if (newKey == 'abbrev') newKey = 'name_sm';
        if (newKey == 'sovereignt') newKey = 'sovereignty';

        newJson[newKey] = json[key];
    }
    return newJson;
}

json = JSON.parse(json);

if (json.type != 'FeatureCollection')
    return console.error("Not a valid GeoJSON file!");

json.features.forEach(function(f) {
    var p = replaceProperties(f.properties);
    if (p.name) p._length = p.name.length;
    if (p.type == 'Sovereign country') p.type = 'sovereignty';
    if (p.type == 'Country') p.type = 'country';
    if (key) p[key] = value;

    f.properties = p;
});

json = JSON.stringify(json, coordReplace, '\t');
json = json.replace(/coordinates":\s"\[.+"/g, function(v) {
    return v.replace(/"\[/g, '[')
            .replace(/\]"/g, ']');
});

fs.writeFile(file, json, function(err) {
    if (err) throw err;
    else console.log("Done.");
});
