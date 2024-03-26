import { param, validationResult } from "express-validator";
import { Request, Response } from "express";

import User from "../models/userModel";
import generateToken from "../utils/generateToken";
import { IUser, ILoginUser } from "../types/user";
import bcryptjs from "bcryptjs";

/**
 * @description Register a new user
 * @route POST /api/users
 * @access Public
 */
const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role }: IUser = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const userObject = new User({
      name,
      email,
      password,
      role,
    });

    const createdUser = await userObject.save();
    generateToken(createdUser._id.toString(),res);
    return res.status(201).json({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      role: createdUser.role,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

/**
 * @description Auth user & get token
 * @route POST /api/users/login
 * @access Public
 */

const authUser = async (req: Request, res: Response) => {
  try {
    const { email, password }: ILoginUser = req.body;

    const user = await User.findOne({ email });

    if (user) {
      const comparePwd = await bcryptjs.compare(password, user.password);
      if (!comparePwd) {
        return res.status(401).json({ error: "Invalid email or password" });
      } 
      generateToken(user._id.toString(),res);
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    } else {
      return res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
}

/**
 * @description Get user profile
 * @route GET /api/users/profile
 * @access Private
 */
const getUserProfile = async (req: Request , res: Response) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
}

/**
 * @description Get all doctors
 * @route GET /api/users/doctors
 * @access Private
 */

const getDoctors = async (req: Request, res: Response) => {
  try {
    const doctors = await User.find({ role: "doctor" });
    if (!doctors) {
      return res.status(404).json({ error: "Doctors not found" });
    }
    return res.json(doctors);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
}

/**
 * @description Get one doctor
 * @route GET /api/users/doctors/:id
 * @access Private
 */

const getOneDoctor = async (req: Request, res: Response) => {
  try {
    const doctor = await User.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }
    return res.json(doctor);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
}

/**
 * @description Logout user
 * @route GET /api/users/logout
 * @access Private
 */

const logoutUser = (req: Request, res: Response) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.send("Logged out");
}

export { registerUser, authUser, getUserProfile, getDoctors, getOneDoctor, logoutUser};
