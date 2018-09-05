//OBJECT DESTRUCTURING

const person = {
    name: 'Sue',
    age: 26,
    location: {
        city: 'Colby',
        temp: 92
    }
};

const {name, age} = person;
const {city, temp} = person.location;
//could also do above with const { name, age, location } = person and reference location.temp or location.city

console.log(`${name} is ${age} years old.`)
console.log(`It is ${temp} degrees in ${city}.`)


//RENAMING -- if you want to pull out the temp value but rename it temperature:

const { temp: temperature } = person.location;

console.log(`It is ${temperature} degrees.`)

//DEFAULT VALUES -- if the key:value DOES NOT EXIST! (If the key exists and the value is an empty string, the empty string will display instead of the default value.)

const {favoriteColor = 'blue'} = person;

console.log(`${name}'s favorite color is ${favoriteColor}.`);


const book = {
    title: 'Ego is the Enemy',
    author: "Ryan Holiday",
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-published' } = book.publisher;

console.log(publisherName);



//ARRAY DESTRUCTURING

const address = ['31 Nagle', 'New York', 'NY', '10040'];

const [street, cityName, state, zip] = address;

console.log(street);

//don't have to name them all

const [, , stateName] = address;
console.log(stateName);

//can add defaults same as objects