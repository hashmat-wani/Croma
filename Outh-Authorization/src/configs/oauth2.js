require("dotenv").config();
const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      let user = await User.findOne({ email: profile?._json?.email })
        .lean()
        .exec();
      if (!user) {
        user = User.create({
          name: profile?._json?.name,
          email: profile?._json?.email,
          password: uuidv4(),
        });
      }
      //   console.log(user);
      return done(null, user);
    }
  )
);
module.exports = passport;
