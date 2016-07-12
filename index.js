	// var app = require('express')();

	// var httpListeningTool = require('http').Server(app);
	// app.get('/', function(request, response){
	// 	response.send('<h1>Hello World</h1>')
	// });

	// httpListeningTool.listen(5000, function(){
	// 	console.log('listening on *:5000')	
	// 	});

	// Acessing express module
	var app = require('express')();

	// Using http - module that is innate to Node.JS
	// ('http') - built in node module - we are passing the app variable through the built in server function.^''
	var http = require('http').Server(app);
	// the built in server function

	// app.get - first argument is path
	// second argument is callback
	// '/' root directory

	app.get('/', function(req, res) {
		res.sendFile(__dirname + '/index.html');		
	});

	// Prints to the console.
	// Wildcard - whatever your server is : 5000
	http.listen(5000, function(){
		console.log('hey man, we are watching you sleep on *:5000');
	});

	