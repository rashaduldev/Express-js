
const express = require('express')
const cors= require('cors');
const app = express()
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware.
app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://mdrashadul898:9u6bzRtARNIlDtRk@cluster0.ioitfil.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();  must be commented out

    const database = client.db("userstDB");
    const userCollection = database.collection("users");

    app.get('/users', async (req, res) => {
      const cursor = userCollection.find()
      const result=await cursor.toArray();
      res.send(result);
      })

      app.post('/users',async(req, res) => {
          const user=req.body;
          console.log('new user', user);
          const result = await userCollection.insertOne(user);
          res.send(result);
      })

        app.delete('/users/:id', async (req, res) => {
          const id=req.params.id;
          console.log('delete user', id);
          const query = { _id: new ObjectId(id)};
          const result = await userCollection.deleteOne(query);
          res.send(result);
        });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();   must be commented out
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Simple CRUD is available')
})

app.listen(port, () => {
  console.log(`simple crud is available on port, ${port}`)
})