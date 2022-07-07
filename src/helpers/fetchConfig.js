const username = process.env.FETCH_AUTH_USER
const password = process.env.FETCH_AUTH_PASSWORD

export const config = {
  method: 'get',
  headers: {
    Accept: 'application/json'
  },
  auth: {
    username,
    password
  }
}
