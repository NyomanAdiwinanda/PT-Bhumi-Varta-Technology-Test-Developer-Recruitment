const router = require('express').Router();
const MapController = require('../controllers/MapController.js');

router.get('/', MapController.getMap);

module.exports = router;
