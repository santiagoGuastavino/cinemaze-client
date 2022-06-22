function normalizeAmount (document) {
  const normalizedAmount = document.IMPORTE_ML.replace(/\s/g, '')
  const normalizedString = (document.MONEDA + ' $' + normalizedAmount)
  return normalizedString
}

function normalizeDate (dateString) {
  const normalizedDate = dateString.replace(/\./g, '/')
  return normalizedDate
}

export function dataMapper (array) {
  const normalizedArray = array.map(document => {
    delete document.__metadata
    document.MONTO = normalizeAmount(document)
    document.FECHA = normalizeDate(document.FECHA_DOC)
    document.FECHA_VENCIMIENTO = normalizeDate(document.VENC_NETO)
    return document
  })
  return normalizedArray
}
