require("dotenv").config();
import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "../middlewares/catchAsyncErrors";
import Goodie from "../models/goodie_model";

export const getAllGoodies = async (req: Request, res: Response) => {
    console.log("nous somme la");

    const goodies = await Goodie.find();

    console.log("les goodies", goodies);

    console.log("voici ma reponse" , res)
    // res.status(200).json({
    //   goodies,
    // });

    return goodies;
  }
  
