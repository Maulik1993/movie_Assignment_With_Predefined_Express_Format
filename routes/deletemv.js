var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var fs=require('fs');


router.post('/',function(request, respond) {
  var content=JSON.parse(fs.readFileSync('./public/page.json'));var obj = {};
     var obj = {};
     var newContent=[];

        for(var i=0; i<content.length; i++){
    if(content[i].Title==request.body.Title)
    {
      continue;
    }
else
{
  console.log("in else   "+content[i]);
  newContent.push(content[i]);
  }
}
fs.writeFile('./public/page.json', JSON.stringify(newContent, null, 4), function(err) {
      if(err) {
      console.log(err);
      }
  });
  // respond.sendFile(path.join( __dirname + '../views/index.html'));
  respond.redirect("/");
});

module.exports = router;
