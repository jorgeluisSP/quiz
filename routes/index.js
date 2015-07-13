var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/creditos', function(req, res) {
  res.render('creditos', { autor: 'Jorge Samaniego', path_foto:'/images/jlsp.png' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer)

module.exports = router;
