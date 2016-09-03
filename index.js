var xString = require('x-is-string')
var xArray = require('x-is-array')
module.exports = djoin
function djoin (/*arr*/path, /*str*/delimiter) {
  if (!xArray(path)) return ''
  if (!xString(delimiter) || !delimiter.length) delimiter = '/'
  return path.join(delimiter)
}
