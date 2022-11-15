"use strict";
exports.__esModule = true;
exports.readCSV = void 0;
var csv_parse_1 = require("csv-parse");
var fs_1 = require("fs");
var person_1 = require("../models/person");
function readCSV(path, entries, callback) {
    if (path === void 0) { path = "./sample.CSV"; }
    if (entries === void 0) { entries = []; }
    if (callback === void 0) { callback = function (x) { return; }; }
    var values = [];
    (0, fs_1.createReadStream)(path)
        .addListener("error", function () {
        return console.log("Error reading the file!");
    })
        .pipe((0, csv_parse_1.parse)({ delimiter: ",", from_line: 2 }))
        .on("data", function (row) {
        entries.push(new person_1.Person(row[0], row[1], row[2].toLowerCase(), parseInt(row[3]), parseInt(row[4]), parseInt(row[5]), parseInt(row[6]), row[7], row[8]));
        return entries;
    })
        .on("error", function () {
        return console.log("Error parsing CSV!");
    })
        .on("end", function () {
        var obj = JSON.parse(JSON.stringify(entries));
        for (var i = 0; i < obj.length; i++) {
            var val = [];
            val.push(i + 1);
            for (var key in obj[i]) {
                val.push(obj[i][key]);
            }
            values.push(val);
        }
        callback(values);
    });
    return entries;
}
exports.readCSV = readCSV;
