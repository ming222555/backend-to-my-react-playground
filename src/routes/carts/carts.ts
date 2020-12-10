import express from 'express';

import * as CartsController from '@app/controllers/carts/carts';

const router = express.Router();

router.get('/:id/tally', CartsController.getCartTally);

export {
    router as router
}