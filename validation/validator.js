export const validator = {
  required(value) {
    return value !== null && value !== undefined && value !== ""
  },
  // minLenght(value, par) {
  //   return typeof value === "string" && value.length >= par
  // },
  // maxLenght(value, par) {
  //   return typeof value === "string" && value.length <= par
  // },
  rightFormat(value) {
    const regEx = new RegExp(/^\s*[0-9]?[0-9]\.[0-9]?[0-9]\.\d{4}\s*$/)
    return regEx.test(value)
  },
  validDate(value) {
    const dt = new Date(value)
    return (dt instanceof Date) && !isNaN(dt.getTime())
  },
  isPast(value) {
    const dt = new Date(value)
    const today = new Date()
    return today.getTime() > dt.getTime()
  }
}



