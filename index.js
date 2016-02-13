/* var cool = require('cool-ascii-faces'); */
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
/* 
app.get('/cool', function(request, response) {
  response.send(cool()); */
});

/*to access the posted data from client using request body*/
app.post('/post', function (req, res) {
    /* Handling the AngularJS post request*/
    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    /*response has to be in the form of a JSON*/
    req.body.serverMessage = "NodeJS replying to angular"
        /*adding a new field to send it to the angular Client */
    res.end(JSON.stringify(req.body));
    /*Sending the respone back to the angular Client */
});
 


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


