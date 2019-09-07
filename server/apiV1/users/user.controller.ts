import { Response } from "express";
import db from "../../config/db";
import User from "./user.model";

export default class UserController {
  async getProfile(req, res: Response) {
    let user = await new User().getUserByUserId(req.userId);
    if (user)
      res.status(200).send({
        success: true,
        data: {
          user
        }
      });
    else {
      res.status(401).send({ success: false, error: "Unauthorized" });
    }
  }
  async updateProfile(req, res: Response) {
    let data = JSON.parse(req.body.data);
    try {
      if (req.files) {
        let filename =
          req.userId +
          "." +
          req.files.file.name.split(".")[
            req.files.file.name.split(".").length - 1
          ];
        req.files.file.mv("./data/images/" + filename, function(err) {
          if (err) console.log(err);
        });
        data.profileImagePath = "/images/" + filename;
      }
      await new User().updateUserProfile(req.userId, data);
      res.status(200).send({
        success: true
      });
    } catch (e) {
      console.log(e);
      res.status(401).send({ success: false, error: "Unauthorized" });
    }
  }

  async activeUsers(req, res: Response) {
    try {
      let users = await new User().getActiveUsers(req.userId);
      res.status(200).send({
        success: true,
        data: {
          users
        }
      });
    } catch (e) {
      res.status(401).send({ success: false, error: "Unauthorized" });
    }
  }
}
