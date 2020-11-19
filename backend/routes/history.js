const router = require('express').Router();
const { History } = require('../db');

router.get('/', (req, res) => {
  History.findAll()
    .then(history => {
      res.status(200).json(history)
    })
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
  const searchTerms = req.body.searchTerms.replaceAll('%20', ' ');
  console.log(searchTerms)
  if(!searchTerms) {
    res.status(400).send({ text: 'Invalid data' })
  }

  History.create({
    searchTerms,
  })
    .then(historyCreated => {
      res.status(200).send({text: 'Search terms created successfully!', history: historyCreated.dataValues})
    })
})

module.exports = router;