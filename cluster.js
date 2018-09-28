const http = require('http');
const cluster = require('cluster');
const numCpus = 4;

if(cluster.isMaster) {
	for (var i =0; i < numCpus; i++) {
		cluster.fork();
	}
} else {
	http.createServer((req, res) => {
		console.log("process launched "+process.pid);
		res.end();
	}).listen(8282);
}
