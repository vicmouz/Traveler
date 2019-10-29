const express = require('express');
const router = express.Router();
const placeController = require("../controllers/place-controller")

router.get('/', placeController.getAll);

router.post('/new', placeController.create);


module.exports = router;