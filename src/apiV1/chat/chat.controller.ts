import { Response } from "express";
import db from "../../config/db";
import User from "./chat.model";
import Group from "./chat.model";
import Chat from "./chat.model";

export default class ChatController {
  async create(req, res: Response) {
    try {
      let data = req.body;
      console.log(data);
      data.userId = req.userId;
      await new Group().create(data);
      res.status(200).send({
        success: true
      });
    } catch (e) {
      console.log(e);
      res.status(401).send({ success: false, error: "Unauthorized" });
    }
  }
  async update(req, res: Response) {
    try {
      let data = req.body;
      data.userId = req.userId;
      let success = await new Group().update(data);
      res.status(200).send({
        success: success
      });
    } catch (e) {
      console.log(e);
      res.status(401).send({ success: false, error: "Unauthorized" });
    }
  }

  async getAvailableChats(req, res: Response) {
    try {
      let activeChats = await new Chat().getAvailableChats(req.userId);
      res.status(200).send({
        success: true,
        data: {
          activeChats
        }
      });
    } catch (e) {
      console.error(e);
      res.status(401).send({ success: false, error: "Unauthorized" });
    }
  }
}
