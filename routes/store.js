const storeController = require('../controllers/storeController');
const router = require('express').Router();

router.get('/', storeController.getAllStores);
router.get('/:id', storeController.getOneStore);
router.post('/', storeController.createStore);
router.put('/:id', storeController.updateStore);
router.delete('/:id', storeController.deleteStore);

module.exports = router;