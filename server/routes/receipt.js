const receiptController = require('../controllers').receipt

export default function (app) {
  app.post('/api/receipt', receiptController.create)
  app.get('/api/receipt', receiptController.list)
}
