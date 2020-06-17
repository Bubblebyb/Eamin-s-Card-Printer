var fs = require('fs');
var answerline = "Eamin Ahmed"

// PUT YOUR ANSWERLINE WHERE EAMIN AHMED IS

var data = fs.readFile('index.txt', 'utf-8', function(err, data) {
    if (err) throw err;

    var replace = data.replace (/\n\d.*/g, '')
    .replace(/TOSSUP: /g, '')
    .replace(/Number.*/g, '')
    .replace(/ID.*/g, '')
    .replace(/Tournament.*/g, '')
    .replace(/##.*/g, '')
    .replace(/ANSWER: .*/g, '')
    .replace(/ mr. /g, 'Mister')
    .replace(/ mrs. /g, 'Mrs')
    .replace(/ dr. /g, 'Doctor')
    .replace(/ st. /g, 'Saint')
    .replace(/ Mr. /g, 'Mister')
    .replace(/ Mrs. /g, 'Mrs')
    .replace(/ Dr. /g, 'Doctor')
    .replace(/ St. /g, 'Saint')
    .replace(/\x2a/g, '') //asterisk
    .replace(/\(|\)/g, "")
    .replace(/\. /g, ".")
    .replace(/\? /g, ".")
    .replace(/“/g, '')
    .replace(/”/g, '')
    .replace(/"/g, '')
    .replace(/, /g, '，')
    .replace(/^[\s\t]*(\r\n|\n|\r)/gm, '')
    .replace(/(\r\n|\n|\r)/gm, '')
    .split('.')
    .join("," + answerline + "\n");

    fs.writeFile('index.csv', replace, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log("Done! Thank you for using Eamin's Card Printer");
    });

    var dataArr = data.toString('utf8').split('s');
})
