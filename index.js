const express = require('express')
const app = express()
const port = 3001
var cors = require('cors')
const parser = require('body-parser')
const db = require('./db');

app.use(cors())
app.use(parser.json())

app.get('/companies', (req, res) => {
    db('techstars') //shorthand select
    db.select('*').from('companies')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.log('error', err )
    });
})

// app.post('/', (req, res, next) => {
//   console.log(req.body)
//   db('methods').insert(req.body) 
//   .then((rows) => {
//     res.send(rows);
//   })
//   .catch((err) => {
//     next(err);
//   });
// })

// app.delete('/:id', (req, res, next) => {
//   db('methods').where({id: req.params.id}).del()
//   .then(data => {
//       res.status(200).send({
//       message: 'Method deleted',
//       data: data
//     })
//   })
//     .catch((err)=> {
//       next(err)
//     })
// })

// app.put('/:id', (req, res, next) => {
//   db('methods').update(req.body).where('id', req.params.id).returning('*')
//   .then((rows) => {
//     res.send(200);
//   })
//   .catch((err) => {
//     next(err);
//   });
// })

app.listen(port, () => console.log(`Example app listening on port ${port}! Yay SQL!`))