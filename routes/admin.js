const express = require('express');
const router  = express.Router();
const registerAdminController = require('../controller/admin/register');



router.post('/register', registerAdminController.registerAdmin)





module.exports = router