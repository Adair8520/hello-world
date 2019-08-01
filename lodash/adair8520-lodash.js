var adair8520 = {
  chunk: function chunk(array, size = 1) {
    let res = []
    for (let i = 0; i < array.length; i += size) {
      let item = array.slice(i, i + size)
      res.push(item)
    }
    return res
  },

  compact: function compact(ary) {
    return ary.filter(it => it)
  },

  flatten:function flatten(ary) {
    var result = []
    for(var item of ary) {
      if (Array.isArray(item)) {
        result.push(...item)
      } else {
        result.push(item)
      }
    }
    return result
  },