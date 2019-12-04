const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/page2', function (req, res) {
    res.sendFile(__dirname + '/page2.html');
});

app.post('/', function (req, res) {
  console.log("POST")
  res.send('POST request to the homepage');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
