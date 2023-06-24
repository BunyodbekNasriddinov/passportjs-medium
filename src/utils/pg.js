import pg from 'pg'
import { BadRequestError } from '../errors/errors.js'
import config from '../configs/config.js'

const pool = new pg.Pool(config.pg)

export const fetchAll = async (SQL, params = []) => {
  const client = await pool.connect()
  
  try {
    const { rows } = await client.query(SQL, params)
    return rows
  } catch (error) {
    return new BadRequestError(error.message)
  } finally {
    client.release()
  }
}

export const fetchOne = async (SQL, params = []) => {
  const client = await pool.connect()
  
  try {
    const { rows: [row] } = await client.query(SQL, params)
    console.log('row', row);
    return row
  } catch (error) {
    return new BadRequestError(error.message)
  } finally {
    client.release()
  }
}
