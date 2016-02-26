var cool = require('cool-ascii-faces'); 
var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname + '/public')));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.bodyParser());


app.get('/', function(request, response) {
  response.render('pages/index');
  /* Handling the AngularJS get request*/
    console.log(request.body);
    //response.setHeader('Content-Type', 'application/json');
    /*response has to be in the form of a JSON*/
    //request.body.serverMessage = {'msg':'NodeJS replying to angular', 'name':'Dhanashri'};
	//var obj = {"fname":"Dan"};
        /*adding a new field to send it to the angular Client */
   //response.send(JSON.stringify(obj));
	//response.render('pages/index');
    /*Sending the respone back to the angular Client */
	//res.sendFile(__dirname + '/Name.html');
});

app.post('/post', function (req, res) {
    /* Handling the AngularJS post request*/
    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    /*response has to be in the form of a JSON*/
	req.body.fname = "Dhanashri";
	req.body.lname = "Ostwal";
	req.body.lat = "32.7050";
	req.body.longitude = "-97.1228";
	req.body.city = "Arlington";
	req.body.school = "University of Texas At Arlington";
	req.body.studentId = "1001277328";
	req.body.schoolOnMap = "UTA is located here!";
	req.body.gender = "Female";
	req.body.semester = "Sem 2";
	
        /*adding a new field to send it to the angular Client */
    res.end(JSON.stringify(req.body));
    /*Sending the respone back to the angular Client */
});

app.get('/cool', function(request, response) {
 // response.send(cool()); 
  var obj = '{"fname":"Dan"}';
    response.send(JSON.stringify(obj));
});

/*to access the posted data from client using request body
app.get('/', function (req, res) {
    /* Handling the AngularJS get request
    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    /*response has to be in the form of a JSON
    req.body.serverMessage = "NodeJS replying to angular"
        /*adding a new field to send it to the angular Client 
    res.end(JSON.stringify(req.body));
    /*Sending the respone back to the angular Client 
});
 
*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


