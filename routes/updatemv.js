var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var jsonfile = require('jsonfile');
var fs=require('fs');
//var app = express();
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
// var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.post('/',function(request, respond) {
   jsonfile.readFile("./public"+"/"+"page.json",function(err,content){
    // var content=JSON.parse(fs.readFileSync('./public/page.json'));var obj = {};
    console.log("in side json read");
    var obj = {};
for(var i=0;i<content.length;i++)
     {
       if(content[i].Title==request.body.Title)
       {
         content[i].Title=request.body.Title;
       content[i].Poster=request.body.Poster;
         content[i].Year=request.body.Year;
         content[i].Actors=request.body.Actors;
         content[i].Director=request.body.Director;
         content[i].Plot=request.body.Plot;
         content[i].Released=request.body.Released;
         content[i].imdbRating=request.body.imdbRating;
         content[i].Awards=request.body.Awards;
       }
     }
 fs.writeFile('./public/page.json', JSON.stringify(content, null, 4), function(err) {
   console.log("in write");
                               if(err) {
                                   console.log(err);
                      }
   });
 })
    //  var content=JSON.parse(fs.readFileSync('./public/page.json'));
    // router.use(express.static(path.join((__dirname,"public"))));
    //   respond.sendFile(path.join( __dirname + '../views/index.html'));
    respond.redirect("/");
});
module.exports = router;
