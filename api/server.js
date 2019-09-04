// defines what the server can do
const express = require("express");

const productsRouter = require('../products/products-router');
const suppliersRouter = require('../suppliers/suppliers-router')

const server = express();

function uppercaser(req, res, next) {
    const name = req.params.name;
    if (name) {
        name = name.toUpperCase();
    }

    res.send(`the name is: ${name}`);
}

server.use(express.json());

server.use('/products', productsRouter);

server.use('/suppliers', uppercaser, suppliersRouter);

//route handlers
server.get("/", (request, response) => {
  response.status(200).json({ api: "up" });
});

//export default server
module.exports = server; 