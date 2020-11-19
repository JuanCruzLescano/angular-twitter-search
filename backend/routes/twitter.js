const router = require('express').Router();
const { twitterClient } = require('../twitterClient');

router.get('/:searchTerms', (req, res) => {
  const searchTerms = req.params.searchTerms.replaceAll('%20', ' ');
  
  const params = { q: searchTerms, tweet_mode: 'extended', count: 10, lang: 'es', result_type: 'recent' }

  if(!searchTerms) res.status(400).send({ text: 'Invalid data' });

  twitterClient.get('search/tweets', params) 
    .then(results => {
      res.status(200).send(results.data.statuses)
    })
    .catch(error => res.send(error))
})

// Get recent tweets -------- No funciona, es un error por las claves dadas
router.get('/tweets/recent', (req, res) => {
  const params = { tweet_mode: 'extended', count: 10}

  twitterClient.get('statuses/home_timeline', params)
    .then(timeline => {
      res.status(200).send(timeline.data)
    })
    .catch(error => res.send(error))
})

module.exports = router;