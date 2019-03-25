var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'MrTraner DS' });
});

router.get('/principios', function(req, res, next) {
    res.render('principios', { title: 'Principios' });
});

module.exports = router;
