import { fetchOne } from '../../utils/pg.js'
import { authGoogleQuery } from './auth.query.js'

export const authGoogleModel = async ({user_id, username, picture, provider, email}) => {
  return await fetchOne(authGoogleQuery, [user_id, username, email, user_id, provider, picture])
}
