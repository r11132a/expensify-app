//
// Object destructuring
//

// const person = {
//   name: "Andrew",
//   age: 36,
//   location: {
//     city: "Port Richey",
//     temp: 92
//   }
// };
//
// const {name: firstName = "Anonymous",age} = person;
// console.log(`${firstName} is ${age}.`);
//
// const {city,temp: temperature} = person.location;
// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     //name: 'Penguin'
//   }
// };
//
// const {name: publisherName = "Self Published"} = book.publisher;
//
// console.log(publisherName);

//
// Array destructuring
//

// const address2 = ['1299 S Juniper St','Philidelphia','Pennsylvania','19147'];
// const [,city,state = 'New York'] = address;
// console.log(`You are in ${city}, ${state}.`)

const item = ["Coffee (hot)",'$2.00','$2.50','$2.75'];

const [itemName,,itemPrice] = item;

console.log (`A medium ${itemName} is ${itemPrice}`);