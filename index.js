const fs = require('fs');
const inquirer = require('inquirer');
const { renderImage } = require('./lib/shapes.js');

const questions = [        
        {
            type: 'input',
            name: 'text',
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
    // Write file to examples folder
    // Generate svg image
    fs.writeFile(`./examples/${questions.shape}_${questions.color}_${questions.text}.svg`, renderImage({...inquirerResponses}), err => {
        if (err) {
            console.log(err);
        } else console.log('Creating image.');
    }
    )
});
}

render();