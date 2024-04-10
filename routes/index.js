var express = require('express');
var router = express.Router();
const user = require('../controller/usercontroller');

/* GET home page. */
router.post('/',user.insert);
router.get('/select',user.select);
router.get('/delete/:id',user.delete);
router.post('/update/:id',user.update);

module.exports = router; 

// hello apane bhul kari che yar bijo program uplode kari nakhyo che
// uplode kari dav ak  minites 