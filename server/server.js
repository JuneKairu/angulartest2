const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());

const url = 'mongodb+srv://angulartest:angulartest@angular-test.469xr.mongodb.net/';
const dbName = 'angulartest';

app.get('/data', async (req, res) => {
  try {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('quotes');
    const data = await collection.find().toArray();
    res.json(data);
    client.close();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
