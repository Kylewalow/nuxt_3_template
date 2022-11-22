export default ({ app }, inject) => {
  inject('deepCopy', (obj) => {
    if (!obj) {
      return null
    }
    return JSON.parse(JSON.stringify(obj))
  })
}
