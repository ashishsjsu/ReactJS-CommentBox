var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express-React' });
});

router.get('/cb', function(req, res){
	res.render('commentbox', {title: 'Comment Box with React'});
});


router.get('/api/comments', function(req, res){
	
	var data = [
		{author: "Peter Hunt", text: "React is awesome!"},
		{author: "Jordan Walke", text: "React components are composable"}
	]	
	res.send(data);
});

module.exports = router;
