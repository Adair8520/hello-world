var USERNAME = {
  compact: function(ary) {
    return ary.filter(it => it)
  },
}

function flatten(ary) {
  var result = []
  for(var item of ary) {
    if (Array.isArray(item)) {
      result.push(...item)
    } else {
      result.push(item)
    }
  }
  return result
}