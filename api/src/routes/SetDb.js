const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const {setDb} = require('../Controllers/SetDb') //IMPORTO FUNCIONES


router.post('/', setDb)


module.exports = router
