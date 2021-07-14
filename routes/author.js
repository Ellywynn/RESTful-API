const authorController = require('../controllers/authorController');
const router = require('express').Router();

router.get('/', authorController.getAll);
router.get('/:id', authorController.getOne);
router.post('/', authorController.create);
router.put('/:id', authorController.update);
router.delete('/:id', authorController.delete);

module.exports = router;