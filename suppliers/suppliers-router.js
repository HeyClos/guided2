

const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.send('get to/suppliers/')
})

router.get('/id', (req, res) => {
    const { id } = req.params;
    res.send(`get to /suppliers/${id}`)
})

module.exports = router;