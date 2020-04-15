import db from "../../config/db";
import Chat from "../chat/chat.model";

export default class User {
  async getUserByUserId(userId) {
    let user = await db("users")
      .where({ userId: userId })
      .select([
        "userId",
        "firstName",
        "lastName",
        "email",
        "city",
        "state",
        "country",
        "bio",
        "mobile",
        "website",
        "profileImagePath",
        "facebookProfileUrl",
        "twitterProfileUrl",
        "linkedInProfileUrl",
        "googlePlusProfileUrl",
        "instagramProfileUrl",
        "dribbleProfileUrl",
      ]);
    if (user.length) {
      return {
        userId: user[0].userId,
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        email: user[0].email,
        mobile: user[0].mobile,
        website: user[0].website,
        city: user[0].city,
        state: user[0].state,
        country: user[0].country,
        bio: user[0].bio,
        profileImagePath: user[0].profileImagePath,
        facebookProfileUrl: user[0].facebookProfileUrl,
        linkedInProfileUrl: user[0].linkedInProfileUrl,
        twitterProfileUrl: user[0].twitterProfileUrl,
        googlePlusProfileUrl: user[0].googlePlusProfileUrl,
        instagramProfileUrl: user[0].instagramProfileUrl,
        dribbleProfileUrl: user[0].dribbleProfileUrl,
      };
    } else {
      return null;
    }
  }

  async updateUserProfile(id, data) {
    await db("users").where({ userId: id }).update({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      mobile: data.mobile,
      website: data.website,
      city: data.city,
      state: data.state,
      country: data.country,
      bio: data.bio,
      profileImagePath: data.profileImagePath,
      facebookProfileUrl: data.facebookProfileUrl,
      linkedInProfileUrl: data.linkedInProfileUrl,
      twitterProfileUrl: data.twitterProfileUrl,
      googlePlusProfileUrl: data.googlePlusProfileUrl,
      instagramProfileUrl: data.instagramProfileUrl,
      dribbleProfileUrl: data.dribbleProfileUrl,
    });
  }

  async getActiveUsers(id) {
    let users = [];
    let data = await db("users")
      .where("userId", "!=", id)
      .select([
        "userId",
        "firstName",
        "lastName",
        "email",
        "city",
        "state",
        "country",
        "bio",
        "mobile",
        "website",
        "connectionId",
        "profileImagePath",
        "facebookProfileUrl",
        "twitterProfileUrl",
        "linkedInProfileUrl",
        "googlePlusProfileUrl",
        "instagramProfileUrl",
        "dribbleProfileUrl",
      ]);
    for (let index = 0; index < data.length; index++) {
      let user = data[index];
      let message = await new Chat().lastMessage(id, user.userId);
      await users.push({
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        website: user.website,
        city: user.city,
        state: user.state,
        country: user.country,
        bio: user.bio,
        online: !!user.connectionId,
        profileImagePath: user.profileImagePath,
        facebookProfileUrl: user.facebookProfileUrl,
        linkedInProfileUrl: user.linkedInProfileUrl,
        twitterProfileUrl: user.twitterProfileUrl,
        googlePlusProfileUrl: user.googlePlusProfileUrl,
        instagramProfileUrl: user.instagramProfileUrl,
        dribbleProfileUrl: user.dribbleProfileUrl,
        lastMessage: message[0],
      });
    }
    return users;
  }
}
