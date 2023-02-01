const express = require('express');
const mongoose = require('mongoose');
const app = express();

//const productRouter = require('./router/product');
const authRouter = require('./router/auth');

//mongodb 연결
mongoose.set('strictQuery', false);
mongoose
  .connect(
    'mongodb+srv://6team:6team@cluster0.dpy7y0u.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(console.log('db연결 성공'))
  .catch((err) => console.log(err));

//req.body로 데이터 받아오려면 써야하는 것
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  console.log(req.body);
});

//product 관련 라우터
//app.use('/api/product', productRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.send(err.message);
});

//서버열기 'localhost:3001'
app.listen(3001, (req, res) => {
  console.log('시작');
});
