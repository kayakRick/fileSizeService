var express = require('express');
var router = express.Router();
var multer  = require('multer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'File Size' });
});

router.post('/get-file-size', multer({ dest: '../uploads/'}).single('file'), function(req, res, next) {
  res.json({"size":req.file.size});
});

module.exports = router;
