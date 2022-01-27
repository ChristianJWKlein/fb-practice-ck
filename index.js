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

//connect to firebase services
initializeApp({
  credential: cert(credentials),
});

//connect to firestore
const db = getFirestore();

//create a collection called "restaurants"

//add each restaurants
db.collection("restaurants")
  .add(restaurants[0])
  .then((doc) => {
    console.log("added restaurant", doc.id);
  })
  .catch((err) => {
    console.log(err);
  });
