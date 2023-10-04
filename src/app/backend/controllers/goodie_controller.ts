require("dotenv").config();
import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "../middlewares/catchAsyncErrors";
import Goodie from "../models/goodie_model";

export const getAllGoodies = async (req: Request, res: Response) => {
  const goodies = await Goodie.find();

  return goodies;
};
