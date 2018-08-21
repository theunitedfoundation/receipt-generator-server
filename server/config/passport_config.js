import { Strategy as LocalAPIKeyStrategy } from 'passport-localapikey-update'
// import * as passport from 'passport'
const passport = require('passport')

passport.use(new LocalAPIKeyStrategy({
  apiKeyHeader: 'API_KEY'
},
function (apikey, done) {
  if (apikey === 'qwerty') {
    return done(null, {})
  } else {
    return done(null, false, {
      message: 'Unauthorized'
    })
  }
}
))

export {
  passport
}
