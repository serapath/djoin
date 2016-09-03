var xString = require('x-is-string')
var xArray = require('x-is-array')
module.exports = djoin
function djoin (/*arr*/path, /*str*/delimiter) {
  if (!xArray(path)) return ''
  if (!xString(delimiter) || !delimiter.length) delimiter = '/'
  if (path[path.length-1] === '') path.push('')
  return path.join(delimiter)
}
