import db from "../../config/db";
import user from "./auth.route";

export default class Authentication {
  public async auth(email, password) {
    let user = await db("users")
      .where({ Email: email, PlainPassword: password })
      .select(["UserId", "FirstName", "LastName", "Email"]);
    if (user[0]) {
      await db("users")
        .where({ Email: email, PlainPassword: password })
        .update({ lastLogin: new Date() });
      return {
        userId: user[0].UserId,
        firstName: user[0].FirstName,
        lastName: user[0].LastName,
        email: user[0].Email
      };
    } else return null;
  }
  public async register(firstName, lastName, email, password) {
    let user = await db("users")
      .where({ email: email })
      .select(["UserId"]);
    if (user.length) return null;
    else
      user = await db("users")
        .returning(["UserId"])
        .insert({
          FirstName: firstName,
          LastName: lastName,
          Email: email,
          Password: password,
          PlainPassword: password,
          CreatedOn: new Date()
        });
    return { userId: user[0], firstName, lastName, email };
  }
}
