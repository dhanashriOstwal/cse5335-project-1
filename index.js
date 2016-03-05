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
	req.body.student1 = "1001277328,Mary,Smith,Female,University of Texas At Arlington,Sem 2,Arlington,32.7050,-97.1228,UTA is here!,95";
	req.body.student2 = "1001272218,John,Taylor,Male,Carnegie Mellon University,Sem 4,Pittsburgh,40.4397,-79.9764,CMU is here!,98";
	req.body.student3 = "4422272218,Ben,George,Male,University of Texas At Dallas,Sem 4,Dallas,32.7767, -96.7970,UTD is here!,56";
	req.body.student4 = "1001272218,Adam,Mwangi,Male,University of Oklahoma,Sem 4,Norman,35.2200, -97.4400,UO is here!,70";
	req.body.student5 = "1001272218,Eve,Ann,Female,San Diego University,Sem 4,San Diego,32.7150, -117.1625,SDU is here!,78";
	req.body.student6 = "1001272218,Ruda,Wilkerson,Female,University of Houston,Sem 2,Houston,29.7604, -95.3698,UH is here!,58";
	req.body.student7 = "1001272218,Flora,Fernandes,Female,University of Southern California,Sem 3,Los Angeles,34.0500, -118.2500,USC is here!,90";
	req.body.student8 = "1001272218,Fred,Parker,Male,California State University,Sem 4,Long Beach,33.7683, -118.1956,CSU is here!,80";
	req.body.student9 = "1001272218,Emma,Henderson,Female,University of Michigan,Sem 2,Ann Arbor,42.2814, -83.7483,UM is here!,77";
	req.body.student10 = "1001272218,Joseph,Walker,Male,University of Utah,Sem 4,Salt Lake City,40.7500, -111.8833,UU is here!,67";
	
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


