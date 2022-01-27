//import our restaurants
const restaurants = require("./restaurants.json");

//import a set of tools to talk to firebase and firestore
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

// import our credentials
const credentials = require("./credentials.json");
const { forEach } = require("lodash");

//connect to firebase services
initializeApp({
  credential: cert(credentials),
});

//connect to firestore
const db = getFirestore();

// refernce to restaurant collect since used heavily
const restRef = db.collection("restaurants");

//create a collection called "restaurants"

//add each restaurants
// restRef
//   .add(restaurants[1])
//   .then((doc) => {
//     console.log("added restaurant", doc.id);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//read one document
// db.collection(restaurants)
//   .doc("rMPMYE1RhsOmmYQKIkcr")
//   .get()
//   .then((doc) => {
//     console.log(doc.id, " => ", doc.data());
//   })
//   .catch((err) => console.error(err));

//get all documents..below we actually get a snapshot of the database at that time.
// restRef
//   .get()
//   .then((snapshot) =>
//     snapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     })
//   )
//   .catch(console.error);

//querying a collection
restRef
  .where("name", "==", "Bolay")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      //todd may not have had snapshot on this line
      console.log(doc.data());
    });
  })
  .catch(console.error);
