const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'Hello, World',
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
  console.log(path.resolve(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  const errorTemplate = {
    status: 500,
    msg: 'Please try again.',
  };
  const error = Object.assign(errorTemplate, err);
  res.status(error.status).send(error.msg);
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
