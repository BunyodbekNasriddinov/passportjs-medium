import passport from 'passport'
import googleStrategy from '../strategies/google.strategy.js'


passport.use(googleStrategy());