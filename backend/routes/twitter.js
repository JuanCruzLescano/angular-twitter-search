const router = require('express').Router();
const { twitterClient } = require('../twitterClient');

router.get('/', (req, res) => {
  const { searchTerms } = req.body;
  const params = { q: searchTerms, tweet_mode: 'extended', count: 10, lang: 'es', result_type: 'recent' }

  if(!searchTerms) res.status(400).send({ text: 'Invalid data' });

  twitterClient.get('search/tweets', params) 
    .then(results => {
      res.status(200).send(results)
    })
    .catch(error => res.send(error))
})

module.exports = router;