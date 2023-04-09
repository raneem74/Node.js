const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);


    if (req.method === 'GET') {
        if (pathname === '/' || pathname === '/main.html') {
          fs.readFile('./public/main.html', (err, data) => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.write('Internal Server Error');
              res.end();
            } else {
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.write(data);
              res.end();
            }
          });
        }
        else if (pathname === '/style.css') {
            fs.readFile('./style.css', (err, data) => {
              if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Internal Server Error');
                res.end();
              } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.write(data);
                res.end();
              }
            });
          }else if (pathname === '/js/main.js') {
            fs.readFile('./js/main.js', (err, data) => {
              if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Internal Server Error');
                res.end();
              } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.write(data);
                res.end();
              }
            });
          }
          if (pathname === '/clients') {
            fs.readFile('./clients.json', (err, data) => {
              if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Internal Server Error');
                res.end();
              } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(data);
                res.end();
              }
            });
          }
        } else if (req.method === 'POST') {
          if (pathname === '/welcome') {
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });
            req.on('end', () => {
              const formData = querystring.parse(body);
              fs.readFile('./clients.json', 'utf8', (err, data) => {
                if (err) {
                  res.writeHead(500, { 'Content-Type': 'text/plain' });
                  res.write('Internal Server Error');
                  res.end();
                } else {
                  let clients = [];
                  if (data) {
                    clients = JSON.parse(data);
                  }
                  clients.push(formData);
                  fs.writeFile('./clients.json', JSON.stringify(clients), err => {
                    if (err) {
                      res.writeHead(500, { 'Content-Type': 'text/plain' });
                      res.write('Internal Server Error');
                      res.end();
                    } else {
                      const { name, mobile, addr, email } = formData;
                      const welcomePage = `
                        <h1>Welcome ${name}</h1>
                        <p>Your entered data is as follows:</p>
                        <ul>
                          <li>Mobile Number: ${mobile}</li>
                          <li>Email: ${email}</li>
                          <li>Address: ${addr}</li>
                        </ul>
                      `;
                      const welcomeHtml = fs.readFileSync('./public/welcome.html');
                      res.writeHead(200, { 'Content-Type': 'text/html' });
                      res.write(welcomeHtml.toString().replace('{welcomePage}', welcomePage));
                      res.end();
                    }
                  });
                }
              });
            });
          }
        }
  });


  server.listen(7000, () => {
    console.log('Server is listening on port 7000');
  });
