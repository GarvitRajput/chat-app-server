import db from "../../config/db";

export default class User {
  async getUserByUserId(userId) {
    let user = await db("users")
      .where({ UserId: userId })
      .select([
        "UserId",
        "FirstName",
        "LastName",
        "Email",
        "City",
        "State",
        "Country",
        "Bio",
        "Mobile",
        "Website",
        "ProfileImagePath",
        "FacebookProfileUrl",
        "TwitterProfileUrl",
        "LinkedInProfileUrl",
        "GooglePlusProfileUrl",
        "InstagramProfileUrl",
        "DribbleProfileUrl"
      ]);
    if (user.length) {
      return {
        userId: user[0].UserId,
        firstName: user[0].FirstName,
        lastName: user[0].LastName,
        email: user[0].Email,
        mobile: user[0].Mobile,
        website: user[0].Website,
        city: user[0].City,
        state: user[0].State,
        country: user[0].Country,
        bio: user[0].Bio,
        profileImagePath: user[0].ProfileImagePath,
        facebookProfileUrl: user[0].FacebookProfileUrl,
        linkedInProfileUrl: user[0].LinkedInProfileUrl,
        twitterProfileUrl: user[0].TwitterProfileUrl,
        googlePlusProfileUrl: user[0].GooglePlusProfileUrl,
        instagramProfileUrl: user[0].InstagramProfileUrl,
        dribbleProfileUrl: user[0].DribbleProfileUrl
      };
    } else {
      return null;
    }
  }

  async updateUserProfile(id, data) {
    await db("users")
      .where("UserId", id)
      .update({
        FirstName: data.firstName,
        LastName: data.lastName,
        Email: data.email,
        Mobile: data.mobile,
        Website: data.website,
        City: data.city,
        State: data.state,
        Country: data.country,
        Bio: data.bio,
        ProfileImagePath: data.profileImagePath,
        FacebookProfileUrl: data.facebookProfileUrl,
        LinkedInProfileUrl: data.linkedInProfileUrl,
        TwitterProfileUrl: data.twitterProfileUrl,
        GooglePlusProfileUrl: data.googlePlusProfileUrl,
        InstagramProfileUrl: data.instagramProfileUrl,
        DribbleProfileUrl: data.dribbleProfileUrl
      });
  }

  async getActiveUsers(id) {
    let users = [];
    let data = await db("users")
      .where("UserId", "!=", id)
      .select([
        "UserId",
        "FirstName",
        "LastName",
        "Email",
        "City",
        "State",
        "Country",
        "Bio",
        "Mobile",
        "Website",
        "ProfileImagePath",
        "FacebookProfileUrl",
        "TwitterProfileUrl",
        "LinkedInProfileUrl",
        "GooglePlusProfileUrl",
        "InstagramProfileUrl",
        "DribbleProfileUrl"
      ]);
    data.forEach(user => {
      users.push({
        userId: user.UserId,
        firstName: user.FirstName,
        lastName: user.LastName,
        email: user.Email,
        mobile: user.Mobile,
        website: user.Website,
        city: user.City,
        state: user.State,
        country: user.Country,
        bio: user.Bio,
        profileImagePath: user.ProfileImagePath,
        facebookProfileUrl: user.FacebookProfileUrl,
        linkedInProfileUrl: user.LinkedInProfileUrl,
        twitterProfileUrl: user.TwitterProfileUrl,
        googlePlusProfileUrl: user.GooglePlusProfileUrl,
        instagramProfileUrl: user.InstagramProfileUrl,
        dribbleProfileUrl: user.DribbleProfileUrl
      });
    });
    return users;
  }
}
