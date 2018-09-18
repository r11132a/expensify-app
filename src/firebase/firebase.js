import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase,database as default};

/* const createExpense = (description,amount,createdAt = 0,note = "") => {
  return {
    description,
    amount,
    createdAt,
    note
  };
};
 */
/* database.ref("expenses")
  .once('value') 
  .then((snapshot) => {
    const expenses = []
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      })
    })
    console.log(expenses)
  }) */

/* database.ref("expenses").on('value',(snapshot) => {
  const expenses = []
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses)
}) */

/* database.ref('expenses').on("child_changed",(snapshot) => {
  console.log(snapshot.key,snapshot.val())
})

 */
/*database.ref("expenses").push(createExpense("Rent",100000))
 */

/* database.ref('notes').push({
  title: "To Do",
  body: "Go for a run"
}) */

/* const onValueChange = database.ref().on('value',(snapshot) =>{
  const person = snapshot.val();
  console.log(`${person.name} is a ${person.job.title} at ${person.job.company}`)
}); */

/* database.ref()
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val()
    console.log(val)
  }).catch((e) => {
    console.log("Error fetching data:",e)
  }) */

/* database.ref().set({
  name: 'Alexander Harrington',
  age: 50,
  stressLevel: 8,
  job: {
    title: "Software Developer",
    company: "OpenKitchen, LLC"
  },
  location: {
    city: "Port Richey",
    state: "Florida",
    country: 'USA'
  }
}).then(() => {
  console.log("Data is saved")
}).catch((e) => {
  console.log("This failed.",e)
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle',
  'location/state': 'Washington'
}) */

/* database.ref('isSingle').remove()
  .then(() => {
    console.log("isSingle removed")
  }).catch((e) => {
    console.log("Error removing data: ",e)
  }) */