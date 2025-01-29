#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer(function (req, res) { 
        if (req.url === "/") {
            fs.readFile(path.join(__dirname, 'Pages', 'index.html'), (err, data) => {
                if (err) throw err;
                res.writeHead(200, {'content-type': 'text/html' });
                res.end(data)
            })
        }
        else if (req.url === "/about") {
            fs.readFile(path.join(__dirname, 'Pages', 'about.html'), (err, data) => {
                if (err) throw err;
                res.writeHead(200, {'content-type': 'text/html' });
                res.end(data)
            })
        }
        else if (req.url === "/contact-me") {
            fs.readFile(path.join(__dirname, 'Pages', 'contact-me.html'), (err, data) => {
                if (err) throw err;
                res.writeHead(200, {'content-type': 'text/html' });
                res.end(data)
            })
        } else {
            fs.readFile(path.join(__dirname, 'Pages', '404.html'), (err, data) => {
                if (err) throw err;
                res.writeHead(404, {'content-type': 'text/html'});
                res.end(data)
            })
        }
}).listen(8080);

