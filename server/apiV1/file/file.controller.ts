import { Response } from "express";
import * as cdn from "../../helpers/cdn";
var request = require("request");

export default class FileController {
  public post = async (req, res: Response): Promise<any> => {
    console.log(req.files);
    var url;
    if (!Array.isArray(req.files.file)) {
      let fileUrl = await cdn.uploadFile(req.files.file.data);
      url = `/v1/file/get/${fileUrl}/${req.files.file.name}`;
    } else {
      url = [];
      for (let count = 0; count < req.files.file.length; count++) {
        let fileUrl = await cdn.uploadFile(req.files.file[count].data);
        url.push(`/v1/file/get/${fileUrl}/${req.files.file[count].name}`);
      }
    }
    try {
      res.status(200).send({
        success: true,
        data: { path: url },
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null,
      });
    }
  };

  public get = async (req, res: Response): Promise<any> => {
    if (req.query.size)
      request(
        `https://drive.google.com/thumbnail?sz=w${req.params.size}&id=${req.params.id}`
      ).pipe(res);
    else
      request(
        `https://drive.google.com/uc?export=view&id=${req.params.id}`
      ).pipe(res);
  };

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
        req.files.file.mv("./data/data/" + filename, function (err) {
          if (err) console.log(err);
        });
        filePath = "/data/" + filename;
        res.status(200).send({
          success: true,
          data: {
            path: filePath,
          },
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
