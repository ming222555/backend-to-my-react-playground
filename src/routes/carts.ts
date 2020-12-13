import express from 'express';

import * as CartsController from '@app/controllers/carts';
import * as ItemsController from '@app/controllers/carts/items';

const router = express.Router();

router.get('/:id/get/qty', CartsController.getQty);
router.get('/:id', CartsController.show);

router.post('/:cartId/items', ItemsController.create);

export {
    router as router
}