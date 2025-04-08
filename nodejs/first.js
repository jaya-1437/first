// response object
// var http = require('http');
// http.createServer((req,res)=>{
// res.write('hello world!');
// res.end();
// }).listen(8080);



// request object
// var http = require('http');
// http.createServer((req,res)=>{
//     res.write(req.url);
//     res.end();
// }).listen(8080);



// file system module
// var http = require('http');
// var fs = require('fs');

// http.createServer((req, res) => {
//     fs.readFile("C:\\Users\\konak\\all html files\\image gallary2.html", function(err, data) {
//         if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.write('Error reading file');
//             res.end();
//             return;
//         }
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         res.end();
//     });
// }).listen(8080, () => {
// });


// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile("C:\\Users\\konak\\all html files\\image gallary 1.html", function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);