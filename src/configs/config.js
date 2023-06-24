const PORT = process.env.PORT || 5001

export default {
  pg: {
    connectionString: process.env.PG_CONNECTION_STRING
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://localhost:${PORT}/auth/google/callback`
  },
}