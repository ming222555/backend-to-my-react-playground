import { Request, Response, NextFunction } from 'express';

export function getCartTally(req: Request, res: Response, next: NextFunction) {

    const id = req.params.id; // params always string

    res.status(200).json(
        {qty: 'okaY'}
    );
}
