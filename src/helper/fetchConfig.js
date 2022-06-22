const url = process.env.FETCH_URL
const auth = process.env.FETCH_AUTH
const cookie = process.env.FETCH_COOKIE

export const config = {
  method: 'get',
  url,
  headers: {
    Authorization: auth,
    Cookie: cookie
  }
}
