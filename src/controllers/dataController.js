import axios from 'axios'

const url = process.env.FETCH_URL
const auth = process.env.FETCH_AUTH
const cookie = process.env.FETCH_COOKIE

const config = {
  method: 'get',
  url,
  headers: {
    Authorization: auth,
    Cookie: cookie
  }
}

export async function getData (req, res, next) {
  axios(config)
    .then((response) => {
      const data = response.data.d.results
      data.map(document => (
        delete document.__metadata
      ))
      return res.status(200).json(data)
    })
    .catch((err) => next(err))
}
