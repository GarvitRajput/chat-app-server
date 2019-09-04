import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import config from "../../config/config";
import db from "../../config/db";
import crypto from "../../helpers/crypto";
import Authentication from "./auth.model";

export default class AuthController {
  public authenticate = async (req: Request, res: Response): Promise<any> => {
    let { email, password } = req.body;
    try {
      password = crypto.hash(password + email + password);
      let user = await new Authentication().auth(email, password);
      if (user) {
        res.status(200).send({
          success: true,
          data: { user, token: AuthController.generateToken(user.userId, req) }
        });
      } else {
        res
          .status(400)
          .send({ success: false, error: "Invalid email or password!" });
      }
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString()
      });
    }
  };

  public register = async (req: Request, res: Response): Promise<any> => {
    try {
      let { firstName, lastName, email, password } = req.body;
      password = crypto.hash(password + email + password);
      let user = await new Authentication().register(
        firstName,
        lastName,
        email,
        password
      );
      if (user) {
        res.status(200).send({
          success: true,
          data: {
            user,
            token: AuthController.generateToken(user.userId, req)
          }
        });
      } else {
        res.status(400).send({ success: false, error: "User Already Exists!" });
      }
    } catch (e) {
      console.log(e);
    }
  };

  static generateToken(userId, req) {
    console.log("token generated",userId);
    var auth = {
      id: userId,
      agent: req.useragent
    };
    return crypto.encrypt(JSON.stringify(auth));
  }
}
