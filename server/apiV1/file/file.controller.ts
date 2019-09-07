import { Response } from "express";

export default class FileController {
  async uploadFile(req, res: Response) {
    let filePath = "";
    try {
      if (req.files) {
        let filename = `${req.files.file.name.split(".")[0]}_${
          req.userId
        }_${new Date().getTime().toString()}.${
          req.files.file.name.split(".")[
            req.files.file.name.split(".").length - 1
          ]
        }`;
        req.files.file.mv("./data/data/" + filename, function(err) {
          if (err) console.log(err);
        });
        filePath = "/data/" + filename;
        res.status(200).send({
          success: true,
          data: {
            path: filePath
          }
        });
      } else {
        res.status(400).send({ success: false, error: "no file passed" });
      }
    } catch (e) {
      console.log(e);
      res.status(401).send({ success: false, error: "Unauthorized" });
    }
  }
}
