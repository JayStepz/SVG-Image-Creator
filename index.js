const inquirer = require('inquirer');
const renderImage = require('/lib/shapes.js');

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

function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data, err => {
        if (err) {
            console.log('There was an issue generating your image.');
        } else {
            console.log('Generating genLogo.svg');
        }
    }); 
}

function render () {
    inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile('./examples/genLogo.svg', renderImage({...inquirerResponses}));
});
}

render();