const prompt = require('prompt-sync')();

function welcomeMessage(userName){
    console.log(`Welcome to Dev Degree ${userName}`)
}

const getInput = () => {
    const name = prompt('What is your name?');
    return name;
}

const inputName =getInput();
welcomeMessage(inputName);