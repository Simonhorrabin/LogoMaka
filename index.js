const inquirer = ('inquirer');
const fs = require('fs');
const generateLogo = require9('./utils/generateLogo');

const questions = [ 
    // when prompted for a shape
    // then a list of shapes will be presented: circle, triangle, or square
    {
        type: "list",
        message: "What shape do you want your SVG to be?",
        name: "shape",
        choices: [
            "triangle",
            "square",
            "circle",
        ]
    },
    // when prompted for a color 
    // then I can a color keyword
    {
        type: "input",
        message: "what color do you want your shape to be?",
        name: "shape_color",
    },()
    // WHEN I am prompted for text 
    // THEN I can enter up to three characters
    {
        type: "input",
        message: "Type in a character set of 3 letters",
        name: "text",
    },
    {
        type: "input",
        message: "choose the color of your text",
        name: "text_color"
    },

    //WHEN I have entered the input for prompts
    // THEN a SVG file logo will be created name "logo.svg"
    function writeToFile(fileName, data) {
        var content = generateLogo(data);
        fs.writeFile(fileName, content, function(error) {
           if (error) {
            return console.log(error);
           }
           // AND the output text Generated logo.svg is printed in the command line
        });

    }

    // Create a function to initialize app
    function init() {
        inquirer.prompt(questions).then(function (data) {
            var fileName = 'logo.svg';
            writeToFile(fileName, data);
        });
    }


