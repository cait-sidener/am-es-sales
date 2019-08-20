'use strict';
const express = require('express');
const compression = require('compression');

const _port = process.env.PORT || 4100;
const _app_folder = 'am-es-sales';

const app = express();
app.use(compression());

app.get('*', function (req, res) {
  const index = path.join(__dirname, 'app/am-es-sales', 'index.html');
  res.sendFile(index);
 });

// ---- SERVE APLICATION PATHS ---- //
app.all('*', function(req, res) {
  res.status(200).sendFile(`/`, { root: _app_folder });
});

// ---- START UP THE NODE SERVER  ----
app.listen(_port, function() {
  console.log('Node Express server for ' + app.name + ' listening on http://localhost:' + _port);
});
