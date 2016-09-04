var xString = require('x-is-string')
var xArray = require('x-is-array')
module.exports = djoin
function djoin (/*arr*/path, /*str*/delimiter) {
  if (!xArray(path)) return ''
  if (!xString(delimiter) || !delimiter.length) delimiter = '/'
  var len = path.length
  var str = path.join(delimiter)
  return len > str.length ? path.map(function(){return delimiter}).join('') : str
}
