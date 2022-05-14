const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ silent: true });
const port = process.env.PORT || 3000;
var serveIndex = require('serve-index');

// app.get('/', (req, res) => {
//   res.send('<script >location.href = "index.html"</script>')
// })

app.use(express.static('public'));
//app.use(express.static('HTML'))

app.use(express.static(__dirname + '/'));
app.use('/public', serveIndex(__dirname + '/public', { style: true }));
app.use('/html', serveIndex(__dirname + '/public/HTML'));
app.use('/porto_react', serveIndex(__dirname + '/public/porto_react'));

app.listen(port, () => {
  console.log(`web server listening at http://localhost:${port}`);
});
