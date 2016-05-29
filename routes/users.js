var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;



// var express = require('express');
// var router = express.Router();
// var path = require('path');
// var bodyParser = require('body-parser');
// /* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('index.html');
// });
//
// module.exports = router;

// router.get('page.json', function (req, res) {
//     console.log("inside get request");
//     var content=fs.readFileSync('./public/page.json');
//     res.json(content.toString());
//     console.log("Res::"+res);
// });
