import db from "../config/db";

  db.schema.hasTable("users").then( async function(exists) {
    if (!exists) {
      await db.schema.createTable("users", function(t) {
        t.increments("UserId").primary();
        t.string("FirstName", 100);
        t.string("LastName", 100);
        t.text("Email");
        t.string("City", 100);
        t.string("State", 100);
        t.string("Country", 100);
        t.text("Bio");
        t.string("Mobile", 20);
        t.text("Website");
        t.text("Password");
        t.text("ProfileImagePath");
        t.text("FacebookProfileUrl");
        t.text("TwitterrProfileUrl");
        t.text("LinkedInProfileUrl");
        t.text("GooglePlusProfileUrl");
        t.text("InstagramProfileUrl");
        t.text("YoutubeProfileUrl");
        t.text("DribbleProfileUrl");
        t.timestamp("LastLogin");
        t.timestamp("CreatedOn");
      });
    }
  });

  db.schema.hasTable("Groups").then( async function(exists) {
    if (!exists) {
      await db.schema.createTable("Groups", function(t) {
        t.increments("GroupId").primary();
        t.string("GroupName", 100);
        t.text("Description");
        t.timestamp("CreatedON");
        t.integer("CreatedBy");
      });
    }
  });

  db.schema.hasTable("GroupMembers").then( async function(exists) {
    if (!exists) {
      await db.schema.createTable("GroupMembers", function(t) {
        t.increments("GroupMemberId").primary();
        t.integer("GroupId");
        t.integer("MemberId");
        t.timestamp("AddedOn");
        t.integer("AddedBy");
      });
    }
  });

  db.schema.hasTable("Messages").then( async function(exists) {
    if (!exists) {
      await db.schema.createTable("Messages", function(t) {
        t.increments("MessageId").primary();
        t.integer("SenderId");
        t.integer("ReceiverId");
        t.boolean("IsGroupChat");
        t.text("Message");
        t.integer("MessageType");
        t.timestamp("SendDate");
      });
    }
  });

  db.schema.hasTable("LinkMetadata").then( async function(exists) {
    if (!exists) {
      await db.schema.createTable("LinkMetadata", function(t) {
        t.increments("Id").primary();
        t.text("Url");
        t.text("Author", 20);
        t.timestamp("Date");
        t.text("Description");
        t.text("ImagePath");
        t.text("Logo");
        t.text("Publisher");
        t.text("Title");
        t.text("Audio");
        t.text("Video");
        t.timestamp("AddedDate");
      });
    }
  });
