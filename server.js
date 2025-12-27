const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let ledState = false;
let beepState = false;

app.use(express.json());
app.use(express.static('public'));

// API для ESP
app.get('/status', (req, res) => {
  res.json({ led: ledState, beep: beepState });
});

app.post('/led', (req, res) => {
  ledState = req.body.state;
  res.send('OK');
});

app.post('/beep', (req, res) => {
  beepState = true;
  setTimeout(() => { beepState = false }, 500);
  res.send('OK');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
