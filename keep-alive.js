const express = require('express');
const app = express();

const port = process.env.PORT ||3001;
//const port = 3001;
app.get('/', (req, res) =>)
res.send('Remade By MrTomXxX!!');

app.listen(port, () =>
  console.log('your app is listening a http://localhost:${port}');
