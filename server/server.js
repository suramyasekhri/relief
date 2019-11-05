const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

// require routers
const apiRouter = require('./routes/api');

// plugin middleware for body parser and url encode
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
// enable cors
app.use(cors());

// serves static files on public folder like styles and html
app.use(express.static(path.resolve(__dirname, '../public')));

// define route handler
app.use('/api', apiRouter);

// if not api call, serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// 404 for unknown routes
app.get('*', (req, res) => {
  res.status(404).send('Page not found!!');
});

// Global error handler
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
