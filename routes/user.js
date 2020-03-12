const router = require('express').Router();

router.get('/', (req, res, next) =>{
    res.send('THIS IS USER INFORMATIVE');
})

module.exports = router;