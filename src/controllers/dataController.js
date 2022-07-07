import axios from 'axios'
import { dataMapper } from '../helpers/utils.js'
import { config } from '../helpers/fetchConfig.js'

const URLFirstChunk = process.env.FETCH_URL_FIRST_CHUNK
const URLSecondChunk = process.env.FETCH_URL_SECOND_CHUNK
const URLThirdChunk = process.env.FETCH_URL_THIRD_CHUNK

export async function getMapSendData (req, res, next) {
  const { id } = req.params

  const openEntriesURL =
    URLFirstChunk + id + URLSecondChunk + 'PA' + URLThirdChunk
  const openEntriesResponse = await axios.get(openEntriesURL, config)

  const closedEntriesURL =
    URLFirstChunk + id + URLSecondChunk + 'PI' + URLThirdChunk
  const allEntriesResponse = await axios.get(closedEntriesURL, config)

  try {
    const openEntries = dataMapper(openEntriesResponse.data.d.results)
    const allEntries = dataMapper(allEntriesResponse.data.d.results)
    const title = allEntries[0].NOMBRE || ''
    return res.status(200).json({
      title,
      openEntries,
      allEntries
    })
  } catch (err) {
    next(err)
  }
}
