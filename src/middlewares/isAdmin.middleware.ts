import { Response, Request, NextFunction } from "express";
import { authService } from "../services/auth.service";

export const isAdminMiddleware = async(
    req: any,
    res: any,
    next: NextFunction
) => {
    
    const { password } = req.body;

    const result = await authService(password);

    if(!result) {
        return res.status(401).send({message: 'AUTHENTICATION_FAILURE'})
    }

    next();
}