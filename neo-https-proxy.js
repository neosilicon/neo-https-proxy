const express = require('express');
const axios = require('axios');

const DEFAULT_REQ = { jsonrpc: '2.0', method: 'getblockcount', params: [], id: 1234 }

// Init app
const app = express();
app.use(express.json());

// Init cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', async (req, res) => {
  const { url, requestData } = req.body;
  const jsonRequest = axios.create({ headers: { 'Content-Type': 'application/json' } })
  const jsonRpcData = Object.assign({}, DEFAULT_REQ, requestData)
  return jsonRequest.post(url, jsonRpcData).then((response) => {
    res.send(response.data);
  });
});

module.exports = require('webtask-tools').fromExpress(app);
