const storeController = require('../controllers/storeController');
const router = require('express').Router();

router.get('/', storeController.getAll);
router.get('/:id', storeController.getOne);
router.post('/', storeController.create);
router.put('/:id', storeController.update);
router.delete('/:id', storeController.delete);

module.exports = router;