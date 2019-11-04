const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use(cors());

app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'Hello, World',
  });
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
