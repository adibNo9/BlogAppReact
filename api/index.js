// const express = require('express');
// const app = express();
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const authRoute = require('./routes/auth');
// const userRoute = require('./routes/users');
// const postRoute = require('./routes/posts');
// const categoryRoute = require('./routes/categories');
// const multer = require('multer');
// const path = require('path');
const { MongoClient } = require('mongodb');

async function main() {
  const uri =
    'mongodb+srv://adibmokhtari:adibmokhtari9@cluster0.bflmr.mongodb.net/?retryWrites=true&w=majority';

  const client = new MongoClient(uri);

  try {
    await client.connect();

    await listDatabases(client);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log('databases:');
  databasesList.databases.forEach((db) => {
    console.log(`-${db.name}`);
  });
}

// dotenv.config();
// app.use(express.json());
// app.use('/images', express.static(path.join(__dirname, '/images')));

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: true,
//   })
//   .then(console.log('Connected to MongoDB'))
//   .catch((err) => console.log(err));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'images');
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });

// const upload = multer({ storage: storage });
// app.post('/api/upload', upload.single('file'), (req, res) => {
//   res.status(200).json('File has been uploaded');
// });

// app.use('/api/auth', authRoute);
// app.use('/api/users', userRoute);
// app.use('/api/posts', postRoute);
// app.use('/api/categories', categoryRoute);

// app.listen('3000', () => {
//   console.log('Backend is running.');
// });
