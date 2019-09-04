import db from "../../config/db";
import { deflateRawSync } from "zlib";
import fetchMetadata from "./../../helpers/metadata";

export default class Meta {
  async getMetadata(url) {
    let metadata = await db("linkMetadata")
      .where("url", url)
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
      await db("linkMetadata").insert({
        url:url,
        author: metadata.author,
        date: metadata.date,
        description: metadata.description,
        imagePath: metadata.image,
        logo: metadata.logo,
        title: metadata.title,
        publisher: metadata.publisher,
        audio: metadata.audio,
        video: metadata.video,
        addedDate: new Date()
      });
      metadata = {
        author: metadata.author,
        date: metadata.date,
        description: metadata.description,
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
