import jwt, { Secret } from 'jsonwebtoken';
import { Response } from 'express';

const generateToken = (id: string, res: Response) => {
  try {
    const secret: string | Secret = process.env.JWT_SECRET || '';
    const token = jwt.sign({ id }, secret, {
      expiresIn: '30d',
    });

    res.cookie("jwt-token", token, {
      httpOnly: true, // The cookie cannot be accessed by client-side JavaScript.
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict", // Prevent CSRF attacks
      maxAge: 30 * 24 * 3600 * 1000 // Expiration time in milliseconds
    });

    return token;
  } catch (error) {
    console.error(error);
    throw new Error('Token generation failed');
  }
};

export default generateToken;
