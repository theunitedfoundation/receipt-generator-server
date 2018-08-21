// const receiptController = require('../controllers').receipt

import { ReceiptCntrl } from '../controllers'

export default function (app) {
  app.post('/api/receipt', ReceiptCntrl.create)
  app.get('/api/receipt', ReceiptCntrl.list)
}
