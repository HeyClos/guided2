// defines what the server can do
const express = require("express");

const productsRouter = require('../products/products-router');
const suppliersRouter = require('../suppliers/suppliers-router')

const server = express();



server.use(express.json());

server.use('/products', productsRouter);

server.use('/suppliers', suppliersRouter);

//route handlers
server.get("/", (request, response) => {
  response.status(200).json({ api: "up" });
});

//export default server
module.exports = server; 