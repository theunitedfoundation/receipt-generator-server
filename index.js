import express from 'express'
import logger from 'morgan'
import {
  json,
  urlencoded
} from 'body-parser'
import Routes from './server/routes'

// Set up the express app
const app = express()

// Log requests to the console.
app.use(logger('dev'))

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(json())
app.use(
  urlencoded({
    extended: false
  })
)

Routes(app)
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) =>
  res.status(200).send({
    message: 'TUF Receipt Generator'
  })
)

export const nodeapp = app
