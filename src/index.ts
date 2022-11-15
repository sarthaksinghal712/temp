import { parse } from 'csv-parse';
import { createReadStream } from 'fs';
import { Person } from '../models/person'

export function readCSV(path: string = "./sample.CSV", entries: Person[] = [], callback: (x) => void = (x) => {return;}) {
    var values: any[][] = [];
    createReadStream(path)
        .addListener("error", function () {
            return console.log("Error reading the file!");
        })
        .pipe(parse({ delimiter: ",", from_line: 2 }))
        .on("data", function (row: any) {
            entries.push(
                new Person(
                    row[0],
                    row[1],
                    row[2].toLowerCase(),
                    parseInt(row[3]),
                    parseInt(row[4]),
                    parseInt(row[5]),
                    parseInt(row[6]),
                    row[7],
                    row[8]
                )
            );
            return entries;
        })
        .on("error", function () {
            return console.log("Error parsing CSV!");
        })
        .on("end", function () {
            var obj = JSON.parse(JSON.stringify(entries));
            for (var i = 0; i < obj.length; i++) {
                var val: any[] = [];
                val.push(i+1);
                for (var key in obj[i]) {
                    val.push(obj[i][key]);
                }
                values.push(val);
            }
            callback(values);
        });
    return entries;
}