// the request of the Http
const http = require("http")
//server will run in the localhost
const host = 'localhost';
const port = 8000;

// the request for the person
const requestPerson = function (req,res) {
    res.writeHead(200);
    res.end("the addressnotes")
}
// the server run with the 
const server = http.createServer(requestPerson);
server.list(port,host,()=>{
    console.log(`server is running on http://${host}:${port}`)
});