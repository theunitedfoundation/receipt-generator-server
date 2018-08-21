const receiptController = require('../controllers').receipt;

module.exports = (app) => {
  require('./receipt')(app)
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the TUF Receipt API!',
  }));
};