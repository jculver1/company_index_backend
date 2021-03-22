const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
const parser = require('body-parser')
const db = require('./db')
require('dotenv').config()
app.use(cors())
app.use(parser.json())


app.get('/companies', (req, res, next) => {
  db('techstars')
  db.select('*').from('companies')
    .then((rows) => {
      res.status(200).send(rows)
    })
    .catch((err) => {
      next(err)
    })
})

app.get('/founders/:id', (req, res, next) => {
  db('techstars')
  db.select('*').from('founders').where({ company_id: req.params.id })
    .then((rows) => {
      res.status(200).send(rows)
    })
    .catch((err) => {
      next(err)
    })
})

app.post('/company', (req, res, next) => {
  db('companies').insert(req.body)
    .then((rows) => {
      res.status(200).send(rows)
    })
    .catch((err) => {
      next(err)
    })
})

app.post('/founder', (req, res, next) => {
  db('founders').insert(req.body)
    .then((rows) => {
      res.status(200).send(rows)
    })
    .catch((err) => {
      next(err)
    })
})

app.delete('/company/:id', (req, res, next) => {
  db('techstars')
  db('companies').where({ id: req.params.id }).del()
    .then(() => {
      db('founders').where({ company_id: req.params.id }).del()
    })
    .then(data => {
      res.status(200).send({
        message: 'Company has been removed',
        data: data
      })
    })
    .catch((err) => {
      next(err)
    })
})

app.put('/company/:id', (req, res, next) => {
  db('techstars')
  db('companies').update(req.body).where('id', req.params.id)
    .then(() => {
      res.status(200)
    })
    .catch((err) => {
      next(err)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}! Yay SQL!`))
