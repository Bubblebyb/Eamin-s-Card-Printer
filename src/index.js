const inquirer = require('inquirer');
const fs = require('fs');
var filename = String(process.argv.slice(2));
// console.log(filename);
// console.log(process.argv.slice(2));

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Type in your answerline',
      name: 'answerline'
  }])
  .then(answers => {
//    console.log(answers);
//    console.log(process.argv);
    var answerline = answers.answerline;
    console.log('Converting the file');
    var data = fs.readFile(filename, 'utf-8', function(err, data) {
      if (err) throw err;

      var replace = data.replace(/\n\d.*/g, '')
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
        .replace(/“/g, '"')
        .replace(/”/g, '"')
        .replace(/."/g, '".')
        .replace(/, /g, '，')
        .replace(/\.../g, "dot dot dot")
        .replace(/^[\s\t]*(\r\n|\n|\r)/gm, '')
        .replace(/(\r\n|\n|\r)/gm, '')
        .split('.')
        .join("," + answerline + "\n");

      fs.writeFile(answerline + '.csv', replace, 'utf-8', function(err, data) {
      });
      console.log('Done!');
      var dataArr = data.toString('utf8').split('s');
    })
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }

  });
