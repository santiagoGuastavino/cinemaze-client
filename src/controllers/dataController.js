import axios from 'axios'
import { config } from '../helper/fetchConfig.js'
import { dataMapper } from '../helper/utils.js'

export async function getMapSendData (req, res, next) {
  axios(config)
    .then((response) => {
      const data = response.data.d.results
      const title = data[0].NOMBRE
      const normalizedData = dataMapper(data)
      return res.status(200).json({
        title,
        normalizedData
      })
    })
    .catch((err) => next(err))
}
