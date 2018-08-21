const receiptController = require('../controllers').receipt;

module.exports = (app) => {
    app.post('/api/receipt', receiptController.create);
    app.get('/api/receipt', receiptController.list);
} 