// If/Else statements

let weather = 'rainy';
if (weather === 'rainy'){
    console.log('Dont forget your umbrella today');
}
else{
    console.log('It might be nice out today');
}

//Else if
weather = 'sunny';
if (weather === 'rainy'){
    console.log('Dont forget your umbrella today');
}
else if (weather === 'sunny'){
    console.log('Grab the sunscreen');
}
else{
    console.log('It might be nice out today'); 
}

//switch

let color='green';
switch(color){
    case 'orange':
        console.log('orange')
        break;
    case 'green':
        console.log('green');
        break;
    default:
        console.log('What color is this?');
        break;
}