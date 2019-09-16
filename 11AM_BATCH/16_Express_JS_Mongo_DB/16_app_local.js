// http://mongodb.github.io/node-mongodb-native/3.2/tutorials/main/
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'infosysdb';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect((err) => {
    const db = client.db(dbName);
    console.log("Connected successfully to Mongo DB");

    /* ---------------------------- START Code Here ------------------------ */



    /* ---------------------------- END Code Here ------------------------ */
});