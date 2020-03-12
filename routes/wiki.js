const router = require('express').Router();

router.get('/', (req, res, next) =>{
    res.send('THIS IS WIKI INFORMATIVE');
    next()
})

router.post('/', async (req, res, next) => {
    console.log('posty post')
})

router.get('/add', (req, res, next) =>{
    res.send(require('../views/addPage')());
})

module.exports = router;