import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import User from '../models/userModel'; 

export const protect = async (req: Request, res: Response, next: NextFunction) => {
    let token;
    try {
        token = req.cookies["jwt-token"];
        if (!token) {
            return res.status(401).json({ error: "Not authorized, no token" });
        }
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(401).json({ error: "Not authorized, user not found" });
        }
        (req as any).user = user;
        next();
    } catch (error) {
        console.error("Error in protect middleware:", error);
        return res.status(401).json({ error: "Not authorized, token invalid" });
    }
};

export const verifySocket = async (socket: any, next: any) => {
    try {
        const token = socket.handshake.auth.token;
        if (!token) {
            return next(new Error("Not authorized, no token"));
        }
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            return next(new Error("Not authorized, user not found"));
        }
        (socket as any).user = user;
        next();
    } catch (error) {
        console.error("Error in verifySocket middleware:", error);
        return next(new Error("Not authorized, token invalid"));
    }
}

export const admin = (req: Request, res: Response, next: NextFunction) => {
    if ((req as any).user && (req as any).user.role === "admin") {
        next();
    } else {
        return res.status(401).json({ error: "Not authorized as an admin" });
    }
}