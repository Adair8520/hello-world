var adair8520 = {
  chunk: function chunk(ary, size = 1) {
    let res = []
    for (let i = 0; i < ary.length; i += size) {
      let item = ary.slice(i, i + size)
      res.push(item)
    }
    return res
  },

  compact: function compact(ary) {
    return ary.filter(it => it)
  },

  difference: function difference(arr1, ...values) {
    var arr2 = []
    for(let value of values) {
      arr2 = arr2.concat(value)
    }
    return arr1.filter(arr1 => arr2.indexOf(arr1) == -1)
  },

  flatten: function flatten(ary) {
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

  isArgumengts: function isArgumengts(value) {
    return Object.prototype.toString.call(value) === "[Object Arguments]"
  },

  isArray: function isArray(value) {
    return Object.prototype.toString.call(value) === "[Object Array]"
  },

  isMatch: function isMatch(obj, src) {
    if(obj === src) {
      return true
    }
    for(var key in src) {
      if (typeof src[key] == 'object' && src[key] != null) {
        if(!isMatch(obj[key], src[key])) {
          return false
        }
      } else {
          if(obj[key] != src[key]) {
            return false
          }
        }
      }
      return true
  },

  bind: function bind(f, thisArg, ...fixedArgs) {
    return function(...args) {
      var acturalArgs = [...fixedArgs]
      for(var i = 0; i < acturalArgs.length; i++) {
        if (acturalArgs[i] === window) {
          acturalArgs[i] = args.shift()
        }
      }
      acturalArgs.push(...args)
      return f.apply(thisArg, acturalArgs)
    }
  }

}