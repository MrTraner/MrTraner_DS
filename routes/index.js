var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'MrTraner DS' });
});

router.get('/principios', function(req, res, next) {
    res.render('principios', { title: 'Principios' });
});

router.get('/typo', function(req, res, next) {
    res.render('typo', { title: 'Tipografía' });
});

router.get('/colors', function(req, res, next) {
    res.render('colors', { title: 'Colores' });
});

module.exports = router;
