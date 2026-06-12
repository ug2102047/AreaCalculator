const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/circle', (req, res) => {
    res.sendFile(__dirname + '/circle.html');
});

app.get('/triangle', (req, res) => {
    res.sendFile(__dirname + '/triangle.html');
});

app.post('/triangle', (req, res) => {
    const base = parseFloat(req.body.base);
    const height = parseFloat(req.body.height);
    if (isNaN(base) || isNaN(height)) {
        return res.status(400).send('<h2>Invalid input for base or height</h2>');
    }
    const area = 0.5 * base * height;
    res.send(`<h2>Area of Triangle: ${area}</h2>`);
});

app.post('/circle', (req, res) => {
    const radius = parseFloat(req.body.radius);
    if (isNaN(radius)) {
        return res.status(400).send('<h2>Invalid input for radius</h2>');
    }
    const area = Math.PI * radius ** 2;
    res.send(`<h2>Area of Circle: ${area}</h2>`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});