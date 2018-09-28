const express = require('express');
const srv = express();
const port = 8282;

srv.get('/contacts', (req, res) => {
	res.send('[{"name":"Boris"},{"name":"Eddy"}]');
})

srv.listen(port, () => {
	console.log('server running on port '+port);
})