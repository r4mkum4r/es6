var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/buildwars', function(req, res, next) {
  res.render('buildwars');
});

router.get('/es6', function(req, res, next) {
  res.render('es6');
});


module.exports = router;
