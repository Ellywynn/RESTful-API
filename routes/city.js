const cityController = require('../controllers/cityController');
const router = require('express').Router();

router.get('/', cityController.getAll);
router.get('/:id', cityController.getOne);
router.post('/', cityController.create);
router.put('/:id', cityController.update);
router.delete('/:id', cityController.delete);

module.exports = router;