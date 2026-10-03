const friend = ['Karim','Rahim','Sajib'];
console.log(Array.isArray(friend));

const age = 47;
console.log(Array.isArray(age));

const number1 = "47";
console.log(Array.isArray(number1));

const number2 = [47];
console.log(Array.isArray(number2));

const isNull = [null];
console.log(Array.isArray(isNull));

const bio = {
    Name: 'Akash',
    Address: 'Kishur ganj, Bangladesh',
    Age: 27
}
Array.isArray(bio) ? console.log('This is array') : console.log('This is not Array');



