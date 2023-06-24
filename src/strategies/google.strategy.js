import google from 'passport-google-oauth20'
import config from '../configs/config.js'
import { authGoogleModel } from '../models/auth/auth.model.js'

const GoogleStrategy = google.Strategy

export default () => {
  return new GoogleStrategy(config.google,
    async function (accessToken, refreshToken, profile, cb) {
      const { sub: user_id, name: username, picture, email } = profile._json

      const user = await authGoogleModel({user_id, username, picture, provider: profile.provider, email})

      console.log('user: ', user);
      console.log('profile: ', profile);
    })
}