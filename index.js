const fs = require('fs');
const inquirer = require('inquirer');
const r = require('./lib/shapes.js');

const questions = [        
        {
            type: 'input',
            name: 'initials',
            message: 'Please enter no more than three characters.',
        },
        {
            type: 'input',
            name: 'color',
            message: 'Please enter your choice of color by name or by hexadecimal number',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose a shape.',
            choices: ['Circle', 'Triangle', 'Square'],
        },
    ];

function render () {
    // Prompt the user
    inquirer.prompt(questions)
    // Answer three questions
    .then((inquirerResponses) => {
    // Generate the file name
    // Write file to examples folder
    fs.appendFile(`./examples/${questions.initials}_${questions.color}_${questions.shape}.svg`, 
    // Generate svg image
    r.renderImage({...inquirerResponses}));
});
}

//writeFileSync(fileName, data);
render();
//console.log(r.renderImage('jss','blue','Triangle'));








//function writeFileSync(fileName, data) {
   // return fs.writeFileSync(fileName, data, err => {
       // if (err) {
          //  console.log('There was an issue generating your image.');
      //  } else {
          //  console.log(`Creating ${questions.initials}_${questions.color}_${questions.shape}.svg`);
      //  }
   // }); 
//}