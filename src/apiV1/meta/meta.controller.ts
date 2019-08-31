import { Response } from "express";
import Meta from "./meta.model";

export default class MetaController {
  async fetchMetaData(req, res: Response) {
    try {
      let url = req.body.url;
      let metadata = await new Meta().getMetadata(url);
      res.status(200).send({
        success: true,
        data: {
          metadata: metadata
        }
      });
    } catch (e) {
      console.log(e);
      res.status(401).send({ success: false, error: "Unauthorized" });
    }
  }
}
