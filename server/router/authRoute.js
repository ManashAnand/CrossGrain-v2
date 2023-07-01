
const express = require('express');
const multer = require('multer');
const { registerRoute, loginRoute  } = require('../controller/authController');
const {listRoute,getAllEqp} = require('../controller/listController');
const upload = multer({ dest: 'uploads/' })

const router = express.Router();

router.post('/register',upload.single('file'),registerRoute);
router.post('/login',loginRoute);
router.post('/listing',upload.single('file'),listRoute);
router.get('/eqp',getAllEqp);
module.exports = router;