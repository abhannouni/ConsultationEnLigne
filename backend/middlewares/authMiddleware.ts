import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import User from '../models/userModel'; 

export const protect = async (req: Request, res: Response, next: NextFunction) => {
    let token;
    token = req.cookies["jwt-token"];
    console.log("token how :"+token);
    
    if (!token) {
        return res.status(401).json({ error: "Not authorized, no token" });
    }
    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);;
        (req as any).user = await User.findById(decoded.id).select("-password");
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: "Not authorized, token failed" });
    }
};

export const admin = (req: Request, res: Response, next: NextFunction) => {
    if ((req as any).user && (req as any).user.role === "admin") {
        next();
    } else {
        return res.status(401).json({ error: "Not authorized as an admin" });
    }
}