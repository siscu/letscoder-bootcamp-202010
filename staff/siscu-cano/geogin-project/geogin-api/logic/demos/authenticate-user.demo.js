require('dotenv').config()

const mongoose = require('mongoose')
const authenticateUser = require('../authenticate-user')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => authenticateUser('aa@aa.aa', 'aa'))
    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)