#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer(function (req, res) { 
    let q = url.parse(req.url, true);
    let fileName = '.' + q.pathname;
    fs.readFile(fileName, function(err, data) {
        if (err) {
            res.writeHead(404, {"content-type": 'text/html'});
            return res.end('404 not found');
            }
            res.writeHead(200, {'content-type': 'text/html'});
            res.write(data)
            return res.end();
        });
}).listen(8080);

