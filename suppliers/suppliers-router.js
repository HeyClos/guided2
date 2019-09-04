const router = require('express').Router();

function uppercaser(req, res, next) {
    let name = req.params.name;

    if (name) {
        req.name = name.toUpperCase();
    }
    next();
}

router.use(express.json());

router.get('/', (req, res) => {
    res.send('get to/suppliers/')
})

router.get('/name', uppercaser, (req, res) => {
    //express needs to know there is a url parameter to collect
    res.send(`get to /suppliers/${req.name}`)
})

module.exports = router;


// const router = express.Router(); > const { router } = require();
// module.exports = { router }