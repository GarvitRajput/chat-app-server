import * as metascraper from "metascraper";
import * as metascraper_author from "metascraper-author";
import * as metascraper_date from "metascraper-date";
import * as metascraper_description from "metascraper-description";
import * as metascraper_image from "metascraper-image";
import * as metascraper_logo from "metascraper-logo";
import * as metascraper_clearbit from "metascraper-clearbit";
import * as metascraper_publisher from "metascraper-publisher";
import * as metascraper_title from "metascraper-title";
import * as metascraper_url from "metascraper-url";
import * as metascraper_media_provider from "metascraper-media-provider";
import * as metascraper_amazon from "metascraper-amazon";
import * as getHTML from "html-get";

const scraper = metascraper([
  metascraper_author(),
  metascraper_date(),
  metascraper_description(),
  metascraper_image(),
  metascraper_logo(),
  metascraper_clearbit(),
  metascraper_publisher(),
  metascraper_title(),
  metascraper_url(),
  metascraper_media_provider(),
  metascraper_amazon()
]);

export default async function fetchMetadata(targetUrl) {
  const { url, html } = await getHTML(targetUrl);
  const metadata = await scraper({ html, url });
  return metadata;
}

