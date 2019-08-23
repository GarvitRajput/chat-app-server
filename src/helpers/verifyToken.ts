import Crypto from "./crypto";

const verifyToken = async (req, res, next): Promise<any> => {
  // check header or url parameters or post parameters for token

  try {
    const token: string = req.headers.authorization;

    if (!token) {
      return res
        .status(401)
        .send({ success: false, message: "No token provided." });
    }
    // verifies secret and checks exp
    const decoded = JSON.parse(Crypto.decrypt(token));
    if (JSON.stringify(req.useragent) !== JSON.stringify(decoded.agent))
      throw "Invalid Token";
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).send({ success: false, message: "Invalid Token" });
  }
};

export default verifyToken;
