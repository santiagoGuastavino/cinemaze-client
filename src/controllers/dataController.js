import axios from 'axios'
import { config } from '../helper/fetchConfig.js'
import { dataMapper } from '../helper/utils.js'

export async function getMapSendData (req, res, next) {
  // const { id } = req.params
  axios.get(
    'https://soaprd.sap.bumeranholdings.com:8000/sap/opu/odata/sap/ZGW_CUENTA_CORRIENTE_SRV/ctascorrientesSet?$filter=(I_ALIAS%20eq%20%27KmeNH1iRWiB7m3Wu%27)%20and%20(I_TIPO_LISTADO%20eq%20%27PA%27)%20and%20(I_ORG_VENTAS%20eq%20%271020%27)&sap-client=300',
    config
  )
    .then((response) => {
      // const data = response.data.d.results
      return res.json(200).json(response)
      // const title = data[0].NOMBRE
      // const normalizedData = dataMapper(data)
      // return res.status(200).json({
      //   title,
      //   normalizedData
      // })
    })
    .catch((err) => next(err))
}
