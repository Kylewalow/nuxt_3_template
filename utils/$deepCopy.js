export default function (obj) {
  if (!obj) {
    return null
  }
  return JSON.parse(JSON.stringify(obj))
}
