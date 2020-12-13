import { Request, Response, NextFunction } from 'express';

import ICART_QTY from "@app/interfaces/ICART_QTY.interface";

export function show(req: Request, res: Response, next: NextFunction) {

    const id = req.params.id; // params always string

    res.status(200).json(
        {
            id: id,
            qty: 1233,
            subtotal: 666,
            tax: 1,
            nett: 667
        }
    );
}

export function getQty(req: Request, res: Response, next: NextFunction) {

    const id = req.params.id; // params always string

    const jsonReturn: ICART_QTY = {
        id,
        qty: 1233888
    };
    
    res.status(200).json(
        jsonReturn
    );
}
