import db from "../../config/db";
import { deflateRawSync } from "zlib";
import fetchMetadata from "./../../helpers/metadata";

export default class Meta {
  async getMetadata(url) {
    let metadata = await db("LinkMetadata")
      .where("URL", url)
      .select([
        "author",
        "date",
        "description",
        "imagePath",
        "logo",
        "title",
        "publisher",
        "audio",
        "video"
      ]);
    if (metadata.length) metadata = metadata[0];
    else {
      metadata = await fetchMetadata(url);
      await db("LinkMetadata").insert({
        URL:url,
        Author: metadata.author,
        Date: metadata.date,
        Description: metadata.description,
        ImagePath: metadata.image,
        Logo: metadata.logo,
        Title: metadata.title,
        Publisher: metadata.publisher,
        Audio: metadata.audio,
        Video: metadata.video,
        AddedDate: new Date()
      });
      metadata = {
        author: metadata.author,
        date: metadata.date,
        descriotion: metadata.description,
        imagePath: metadata.image,
        logo: metadata.logo,
        title: metadata.title,
        publisher: metadata.publisher,
        audio: metadata.audio,
        video: metadata.video
      }
    }
    return metadata;
  }
}
