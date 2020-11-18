const router = require('express').Router();
const { History } = require('../db');

router.get('/', (req, res) => {
  History.findAll()
    .then(history => {
      res.status(200).json(history)
    })
    .catch(err => console.error(err));
});

router.post('/', (req, res) => {
  console.log(req.body)
  const { searchTerms } = req.body

  if(!searchTerms) {
    res.status(400).send({ text: 'Invalid data' })
  }

  History.create({
    searchTerms,
  })
    .then(historyCreated => {
      res.status(200).send({
        text: 'Search terms created successfully!',
        history: historyCreated.dataValues
      })
    })
})

module.exports = router;