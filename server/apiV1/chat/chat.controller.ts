import { Response } from "express";
import db from "../../config/db";
import User from "./chat.model";
import Group from "./chat.model";
import Chat from "./chat.model";

export default class ChatController {
  async getChatMessages(req, res: Response) {
    try {
      let data = req.body;
      data.userId = req.userId;
      let messages = await new Chat().getChat(
        data.id,
        data.isGroup,
        data.userId
      );
      res.status(200).send({
        success: true,
        data: {
          messages
        }
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
