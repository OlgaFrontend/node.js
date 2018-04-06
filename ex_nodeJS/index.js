// var things = require('./things');
// var events = require('events');
// var util = require('util');


// console.log(things.arr([1,2,3,4,4,5]));
// console.log(things.multiply(5,8));
// console.log(things.some_value);

// //events

// var events = require('events');

// var myEmit = new events.EventEmitter();

// myEmit.on('some_event', function(text){
// 	console.log(text);
// });

// myEmit.emit('some_event', 'Event handler works!');

// var Cars = function(model) {
// 	this.model = model;
// }

// util.inherits(Cars, events.EventEmitter);

// var bmw = new Cars('BMW');
// var audi = new Cars('Audi');
// var volvo = new Cars('Volve');

// var cars = [bmw, audi, volvo];
// cars.forEach(function(car) {
// 	car.on('speed', function(text) {
// 		console.log(car.model + " speed is - " + text);
// 	});
// });

// bmw.emit('speed', '254.5 km');
// audi.emit('speed', '300 km');
// volvo.emit('speed', '400 km');

//read files

// var fs = require('fs');

// var file_readed = fs.readFileSync('text.txt', 'utf8');
// console.log(file_readed);

// //write files

// var message = "Hello world!\n" + file_readed;
// fs.writeFileSync('some_new_file.txt', message);

// //async work with files

// fs.readFile('text.txt', 'utf8', function(err, data) {
// 	console.log(data);
// });

// fs.writeFile('some.txt', 'Hi, it me async!!!', function(err, data){});

// console.log('Test');

// //delete files

// fs.unlink('some.txt', function(){});

//add new directory (sync)

// fs.mkdirSync('new-one');

//remove new-one directory (sync)

// fs.rmdirSync('new-one');

//add new folder (async)

// fs.mkdir('new-folder', function(){
// 	fs.writeFile('./new-folder/some.txt', 'Hello world!',function(){
// 		console.log('WOW it works!!!');
// 	});
// });

//remove new-folder (async)
//to do it first you need to remove all files within folder

// fs.unlink('./new-folder/some.txt', function(){
// 	fs.rmdir('new-folder', function(){});
// });

//create server with node.js

// var http = require('http');

// var server = http.createServer(function(req, res) {
// 	console.log("URL pages: " + req.url);
// 	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
// 	res.end('Hello world');
// });

// server.listen(3010, '192.168.1.149');
// console.log('track port 3010');

//works with flows in node.js

// fs.writeFile('newOne.txt', 'Hi, it me async!!!', function(err, data){});

// var myReadShort = fs.createReadStream(__dirname + '/newOne.txt');

// myReadShort.on('data', function(chunk){
// 	console.log('New data added:\n\n\n\n\n\n\n' + chunk);
// });

//to write in new file with flow



// var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');
// myReadShort.on('data', function(chunk){
// 	console.log('New data required');
// 	myWriteShort.write(chunk);
// });
// fs.unlink('news.txt', function(){});

//function pipe(), work with HTML & JSON

// var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');
// myReadShort.pipe(myWriteShort);

//output new site in browser
// var fs = require('fs');
// var http = require('http');

// var server = http.createServer(function(req, res) {
// 	console.log("URL pages: " + req.url);
// 	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
// 	var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
// 	myReadShort.pipe(res);
// });

// server.listen(3010, '192.168.1.149');
// console.log('track port 3010');


//output JSON file

// var fs = require('fs');
// var http = require('http');

// var server = http.createServer(function(req, res) {
// 	console.log("URL pages: " + req.url);
// 	res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
// 	var obj = {
// 		model: 'Audi',
// 		speed: '234.5',
// 		wheels: 4
// 	}
// 	res.end(JSON.stringify(obj));
// });

// server.listen(3010, '192.168.1.149');
// console.log('track port 3010');

//lesson 11 ROUTING NODE JS

// var fs = require('fs');
// var http = require('http');

// var server = http.createServer(function(req, res) {
// 	console.log("URL pages: " + req.url);
// 	if(req.url === '/index' || req.url === '/'){
// 		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
// 		fs.createReadStream(__dirname + '/index.html').pipe(res);
// 	} else if (req.url === '/about'){
// 		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
// 		fs.createReadStream(__dirname + '/about.html').pipe(res);
// 	} else {
// 		res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
// 		fs.createReadStream(__dirname + '/404.html').pipe(res);
// 	}
// });

// server.listen(3010, '192.168.1.149');
// console.log('track port 3010');

//add express.js + examples of routing

// var express = require('express');

// var app = express();

// app.get('/', function(req, res){
// 	res.send('This is home');
// });

// app.get('/news', function(req, res){
// 	res.send('This is news');
// });

// app.get('/news/:id', function(req, res){
// 	res.send('ID is - ' + req.params.id);
// });

// app.listen(3010);

//lesson #14. template ejs with express.js + output html files in browser
//lesson #15 static files and extra software

var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/index', function(req, res){
	res.render('index');
});

app.get('/about', function(req, res){
	res.render('about');
});

app.post('/about', urlencodedParser, function(req, res){
	if (!req.body) return res.sendStatus(400)
		console.log(req.body);
	res.render('about-success', {data: req.body});
});

app.get('/news/:id', function(req, res){
	var obj = {title: "New_news", id: 4, items: ['Home', 'About', 'Products', 'Contacts']};
	console.log(req.query);
	res.render('news', {newsId: req.params.id, newsArticle: 'Say hi!!!!!', obj: obj});
});

app.listen(3010);



