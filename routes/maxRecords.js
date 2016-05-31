var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');

router.get('/', function (req, res) {
    var content=JSON.parse(fs.readFileSync('./public/page.json'));
    res.json(content.length);
    console.log("data of content     " + content.length);

});

module.exports = router;
