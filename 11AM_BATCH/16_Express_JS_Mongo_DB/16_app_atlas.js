// https://docs.mongodb.com/ecosystem/drivers/node/
const MongoClient = require('mongodb').MongoClient;
const url = "<MONGO_DB_ATLAS_URL>";
const client = new MongoClient(url, { useNewUrlParser: true });

// Database Name
const dbName = 'infosysdb';

client.connect(err => {
    const db = client.db(dbName);
    console.log('Connected to MongoDB Atlas Successfully');

    /* -------------------------------- START HERE ---------------------------- */

    // DELETE RECORD FROM DATABASE
    // Delete Wilson Record
    db.collection('employee').deleteOne({name : 'Wilson'} , (err , r) => {
        console.log('One Record is deleted');
    });
    client.close();


    /* -------------------------------- END HERE ---------------------------- */

});