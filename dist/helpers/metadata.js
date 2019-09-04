"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const metascraper = require("metascraper");
const metascraper_author = require("metascraper-author");
const metascraper_date = require("metascraper-date");
const metascraper_description = require("metascraper-description");
const metascraper_image = require("metascraper-image");
const metascraper_logo = require("metascraper-logo");
const metascraper_clearbit = require("metascraper-clearbit");
const metascraper_publisher = require("metascraper-publisher");
const metascraper_title = require("metascraper-title");
const metascraper_url = require("metascraper-url");
const metascraper_media_provider = require("metascraper-media-provider");
const metascraper_amazon = require("metascraper-amazon");
const getHTML = require("html-get");
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
function fetchMetadata(targetUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const { url, html } = yield getHTML(targetUrl);
        const metadata = yield scraper({ html, url });
        return metadata;
    });
}
exports.default = fetchMetadata;
//# sourceMappingURL=metadata.js.map