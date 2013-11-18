var connect = require('connect');

connect.createServer(
	connect.static(__dirname)
).listen(8082);

console.log('Navigate to http://127.0.0.1:8082/');
