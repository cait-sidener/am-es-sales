const express = require('express');
const compression = require('compression');
const path = require('path');
const _app_folder = 'dist/am-es-sales';


const _port = process.env.PORT || 4100;

const app = express();
app.use(compression());

// app.get('*', function (req, res) {
//   const index = path.join(__dirname, 'dist', _app_folder, 'index.html');  res.sendFile(index);
// });

// ---- SERVE STATIC FILES ---- //
app.get('*.*', express.static(_app_folder, { maxAge: '1y' }));

// ---- SERVE APLICATION PATHS ---- //
app.all('*', function(req, res) {
  res.status(200).sendFile(`/`, { root: _app_folder });
  });

// ---- START UP THE NODE SERVER  ---- //
app.listen(_port, function() {
  console.log('Node Express server for ' + app.name + ' listening on http://localhost:' + _port);
});
