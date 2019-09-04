import db from "../../config/db";
import crypto from "../../helpers/crypto";

export default class Authentication {
  public async auth(email, password) {
    let user = await db("users")
      .where({ email: email, password: password })
      .select(["userId", "firstName", "lastName", "email"]);
    if (user[0]) {
      await db("users")
        .where({ email: email, password: password })
        .update({ lastLogin: new Date() });
      return {
        userId: user[0].userId,
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        email: user[0].email
      };
    } else return null;
  }
  public async register(firstName, lastName, email, password) {
    let user = await db("users")
      .where({ email: email })
      .select(["userId"]);
    if (user.length) return null;
    else
      user = await db("users")
        .returning(["userId"])
        .insert({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          createdOn: new Date()
        });
    return { userId: user[0].userId, firstName, lastName, email };
  }
  public async updateUserConnection(data) {
    try {
      let id = JSON.parse(crypto.decrypt(data.token)).id;
      await db("users")
        .where({ "userId": id })
        .update({
          connectionId: data.connectionId
        });
      return id;
    } catch (e) {
      console.log("error", e);
      return 0;
    }
  }
  public async removeUserConnection(id) {
    await db("users")
      .where({ "connectionId": id })
      .update({
        connectionId: null
      });
  }
}
