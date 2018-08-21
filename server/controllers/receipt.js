const Receipt = require('../models').Receipt


export function create(req, res) {
    return Receipt
        .create({
            donor: req.body.donor,
            receiver: req.body.receiver,
            amount: req.body.amount,
            email_id: req.body.email_id,
            mobile: req.body.mobile,
            purpose: req.body.purpose
        }).then()
        .then(receipt => res.status(201).send(receipt))
        .catch(error => res.status(400).send(error));
}

export function list(req, res) {
    return Receipt
        .all()
        .then(receipts => res.status(200).send(receipts))
        .catch(error => res.status(400).send(error));
}
