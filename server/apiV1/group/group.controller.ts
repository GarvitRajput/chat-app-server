import { Response } from "express";
import db from "../../config/db";
import User from "./group.model";
import Group from "./group.model";

export default class GroupController {
  async create(req, res: Response) {
    try {
      let data = req.body;
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
  async getJoinedGroups(req, res: Response) {
    try {
      let data = await new Group().getJoinedGroups(req.userId);
      res.status(200).send({
        success: true,
        data: {
          groups: data
        }
      });
    } catch (e) {
      console.log(e);
      res.status(401).send({ success: false, error: "Unauthorized" });
    }
  }
}
