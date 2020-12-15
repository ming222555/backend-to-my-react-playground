import { Request, Response, NextFunction } from 'express';

import INEW_CART_ITEM from "@app/interfaces/INEW_CART_ITEM.interface";

export function create(req: Request, res: Response, next: NextFunction) {

    const cartId = req.params.cartId;

    const itemId = req.body.itemId;
    const itemName = req.body.itemName;
    const qty = req.body.qty;

    const jsonReturn: INEW_CART_ITEM = {
        cartId,
        itemId: 'repliedooo ' + itemId,
        itemName: 'repliedooo ' + itemName,
        qty: qty
    };
    
    // return res.status(200).json(
    //     jsonReturn
    // );
    setTimeout( () => {
        return res.status(200).json(
            jsonReturn
        );
    }, 6666);
}
