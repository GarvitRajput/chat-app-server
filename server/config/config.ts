import * as dotenv from "dotenv";
dotenv.config();

export default {
  APP: process.env.APP || "development",
  PORT: process.env.PORT || "3000",
  ENV: process.env.NODE_ENV || "development",
  DB_DIALECT: process.env.DB_DIALECT || "pg",
  DB_HOST: process.env.DB_HOST || "ec2-54-204-35-248.compute-1.amazonaws.com",
  DB_NAME: process.env.DB_NAME || "d80g0bd6v50up8",
  DB_PASSWORD: process.env.DB_PASSWORD || "93cc09462e9b591c0311dd0c35e8384bbade585a1d17f7e82cf887cb02614e33",
  DB_PORT: process.env.DB_PORT || "5432",
  DB_USER: process.env.DB_USER || "yyeutnprpjmrxi",

  // DB_DIALECT: process.env.DB_DIALECT || "mssql",
  // DB_HOST: process.env.DB_HOST || "localhost",
  // DB_NAME: process.env.DB_NAME || "chat-app",
  // DB_PASSWORD: process.env.DB_PASSWORD || "Login@123",
  // DB_PORT: process.env.DB_PORT || "1433",
  // DB_USER: process.env.DB_USER || "sa",
  CLIENT_APP: "client/dist/chat-app",
  AES_KEY:
    process.env.AES_KEY ||
    `_b6rLDd!6+CDMuNpEk2@v^%PNnMP*BZ?U2PHzJEshMHF+xZf37R^y7kxTF^N^%c2a?4Jbu9uJ5yPAB3DfjZ-$K4Wy8edpZ4LcYrcVSL%Y7pLnDUuy&pZyJtWqbYmy2?9hJjWC!N=SswCyZZmmf3EfW%Uh2r2a7A6xSW6X@5K2b?*VbcZy8^$mnmZ^em9_XwG#_9sJjQvYsR$TJn-wYnLfek4h@zJ@jeDwgJAvRFzwjqne%eymm_@juBJb=zuSFyx2&9zYY3zfLMp#DAf4UL5?4W2ag7shuNe55mTL?_fe9TEPnw7Pj3-xxtv3jw@X-a4y*hnTwD-WfTFYUKkGc_vQ@#p@t@zr6DvKAh+RMV&hL#WF%676!qJUWc%j7AvWzHXDV_LcpSCF@$7zxRH*cQRV#xP73JRXaaKU+bJZTPh%JpA9QSNZKWax!H*p@aJGsp#L&wWR9Wj2C*hY-_AdFGm?RPB_cmVhk$uMQGrRFhB5RU3Nd8xGehq3Ek8b@TrtV9n3D8MgN@gKqBMqg38HBkkJk5a4=JjDrjh%brDpsgW2QGt8r6YxP#ddzDfSW2W-rhBg^8ppaPqvx_3vr@bLW+P3agX@xbwknCJTU@$Lt%_*f^$eKe4?yp%AZf_7$hp#mS7!9n$VrTmJ^@L2W3KMhtw_XQk_An7XkW4t2!YXj=2&L#b5kL!-q%?ufTYd3cj2&2uUFEt_DMF+83qe_FUEZ&twGd4e-t8Mrb9h3a@VnG9qaaU*sveyAjW-!*E@c&LvHawwzUw7fXtQPT#dEKtpGM%HhhVu6p6RV-yWca?&pvgL!&ff8tfH7qffbb^X?@=Ye7xahd3w?QJ@MaeK+&RRTNBVMASgk+y8NCj_=sb376yncPAhTXuYfVp5@B3AuGB7NwkJr5p2q@7*gUmzPpPK?7qa!VyETbK^rTwc%2cqva*FXBGk-7Zw@rhqXS%8svZH3maVFA%FKV2gRksc!zP7CZUdyWRn^rLXKDAsEmUZ&ZdJMMh-XPR_xDJ8Nen+Qs4qx%yjH2$kBHq3^PL8h_S7etTYJTUZ&7Bx?Uk86ZxdUyX7hgz*U?TUTZLLa=%58uXTXANxRJW7JZU!8ZcfHnD#*s7_c^MvyKxAz3uqAjwE2VJ9RRKBezV@=5XzPyNc?3Wmqwd7p$^Ty#=#-6_XU^tJDtQNJFh=HMeXxj6r7=2?Nzhuq5X5c=uMfq5R&m?Qzg%?fY-U2bPGY7pYb+yLH@vA-Lmr=F_pY_4hMCST%KJb4uaJx!MzKpWY*xbzPC6FS+*8&_4@hQcNnUM7kM5*TzF^Sd!VDeAt^dB2b?U+LgzQN_x74%&rsL9x5ngQdULcu-ggxPqfG7JfcTECS5K7Ne%kgz6UH?YRR39q_8EVG#%S$abpL_m$P8zH5Mt2LUMRwft6gpUhUnxK_r!y2@JD3mBr8d$S9DkCPgx+pLvhjTe@kJrPb3Mj!uErjCfR#$nG9ceY@KLbvXDzB9t*L&Xu3qqe4B^kUvsZ6D+3rj6wKTxv7&5PAkhfwc=*JMyxvqkV5FT5MSY4*qKCk!VmCveDB8Zh+6h?_xjN5DEG92?3KrypCUCJhnETJ62+zW27bbfH3rm=kFnXrFg3Z5y%tGkUfe+rActLR5HsUVsa&x^bw7n@FLQ8E*=JSs5nFs32xR7Y&Bq3k7#HTm@zW5A=v*4m*C-Ufy8Mgh+xak-ufnbRXB#@9w6YgRsU4yKdF_gZ-X9h=KrQcZJN#2ve7k7TJRcrWz5mtz+ZwzHNgbSq7#95dYa-&CtqY^FHmh8a6dc#?wZQNtZNQdNew7ELBU8*dCC5dd%bhUebR4@9DS8C@+&kJKE5^H8XJ-!d9Sde%&^UXWXp!fu3F+@hLeH*LaKBh7TqxMg@P!j&d^yFa9!%NpQqe$8v6&-&re!3mqnqf2czb=caDMS=TaX+_Q5d2zPAfncS?^-Mm-trTNHng^aS@S+xZw!AjuAqMFa-Zeu2h+BwYn#CF4M5_P5b9nr8SAuaCp%&GqyHjGaEEKNe=y^ArA5Lzmb2=wA_S*kkX6-DgqNDfv7CRjGPMnv`
};
