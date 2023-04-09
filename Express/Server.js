const express = require('express');
const app = express();
const fs = require('fs');
const querystring = require('querystring');
const bodyParser = require("body-parser");
let PORT = process.env.PORT || 7000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  fs.readFile('./public/main.html', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).type('html').send(data);
    }
  });
});

app.get('/main.html', (req, res) => {
  fs.readFile('./public/main.html', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).type('html').send(data);
    }
  });
});

app.get('/style.css', (req, res) => {
  fs.readFile('./style.css', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).type('css').send(data);
    }
  });
});    

app.get('/js/main.js', (req, res) => {
  fs.readFile('./js/main.js', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).type('js').send(data);
    }
  });
});

app.get('/clients', (req, res) => {
  fs.readFile('./clients.json', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).type('json').send(data);
    }
  });
});      
     
app.post("/welcome",(req,res)=>{
  const formData = req.body;
  fs.readFile('./clients.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing to file');
    } else {
      let clients = [];
      if (data) {
        clients = JSON.parse(data);
      }
      clients.push(formData);
      fs.writeFile('./clients.json', JSON.stringify(clients), err => {
        if (err) {
          console.error(err);
          res.status(500).send('Error writing to file');
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
          res.status(200).type('html').send(welcomeHtml.toString().replace('{welcomePage}', welcomePage));
        }
      });
    }
  });
})


app.listen(PORT, () => {
    console.log('Server is listening on port 7000');
  });