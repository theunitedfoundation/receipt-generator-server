// const receiptController = require('../controllers').receipt;
import ReceiptCntrl from './receipt'

export default function (app) {
  ReceiptCntrl(app)
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the TUF Receipt API!'
  }))
}
