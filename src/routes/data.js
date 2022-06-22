import express from 'express'
import {
  getMapSendData
} from '../controllers/dataController.js'

const router = express.Router()

router.get('/data', getMapSendData)

export default router
