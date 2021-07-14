import storeController from '../controllers/storeController';
import express from 'express';
const router = express.Router();

router.get('/', storeController.getAllStores);
router.get('/:id', storeController.getOneStore);
router.post('/', storeController.createStore);
router.put('/:id', storeController.updateStore);
router.delete('/:id', storeController.deleteStore);

export default router;