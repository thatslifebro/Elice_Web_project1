const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.set('strictQuery', false);

mongoose
  .connect(
    'mongodb+srv://6team:6team@cluster0.dpy7y0u.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(console.log('db연결 성공'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  console.log(req.body);
});

app.listen(3001, (req, res) => {
  console.log('시작');
});

<<<<<<< HEAD
adslfkjsalkfjsadlkfjaslfk;
asdlkfjsaklfjslakdfjslakfj;
sadfasfasfsaf;
=======
console.log('hihellohihi');
>>>>>>> origin/feature-productDB
