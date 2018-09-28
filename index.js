// import du module http
const http = require('http');
const port = 8282;

const srv = http.createServer(requestHandler)

const requestHandler = (req, res) => {
	console.log(req.url);
	console.log(req.method);
	if(req.url == '/contacts' && req.method == 'GET') {
		getContacts(res);
	}
}

function getContacts(res) {
	res.setHeader('Content-type', 'application/json');
	res.write('[{"name":"Boris"},{"name":"Eddy"}]');
	res.end();
}

srv.listen(port, (err) => {
	if(err) console.log(err);
	else console.log('server running on port '+port);
})
