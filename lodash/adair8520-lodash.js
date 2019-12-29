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
  
   //这个方法类似 _.difference ，除了它接受一个 iteratee （迭代器）， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）
  // differenceBy: function differenceBy(arr, ...args) {
  //   const predicate = isArray(last(args))? null : iteratee(args.pop())
  //   if (predicate === null) return difference(arr, args)

  //   const ret = []
  //   const toExclude = flattenDeep(args).map(it => predicate.call(null, it))
  //   for (let i = 0, len = arr.length; i < len; i++) {
  //     if (!toExclude.includes(predicate(arr[i]))) ret.push(arr[i])
  //   }
  //   return ret
  // },

  differenceBy: function differenceBy(array, ...value) {
    let predicate
    let last = value[value.length - 1]
    if (!isArray(last)) {
      var pre = value.pop()
      predicate = iteratee(pre)
    }
    value = flatten(value)
    let res = array.slice()
    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j < value.length; j++) {
        if (!isArray(last)) {
          
        }
      }
    }
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
  },

  flat: function flat(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      /*if (ary[i].slice) {   */
      if ( Array.isArray(ary[i]) ) {   
          for (var j = 0; j < ary[i].length; j++) {
            result.push(ary[i][j])
          } 
      } else {
          result.push(ary[i])
      }
    }
    return result
  },

  includes: function includes(ary, value) {
/*  return ary.indexof(value) >= 0 */
    for (var i = 0; i < ary.length; i++) {
      if (ary[i] == value) {
        return true
      } 
    }
    return false
  },

  sum: function sum() {
        var result = 0
        for (var i = 0; i < arguments.length; i++) {
          result += arguments[i] 
        }
        return result
      }, 

  forEach: function forEach(ary, action) {
    for (var i = 0; i < ary.length; i++) {
      action(ary[i])
    }
  },


  //filter:是判断返回值的真假，判断是否保留
  filter: function filter(ary, test) {
    var passed = []
    for(var i = 0; i < ary.length; i++) {
      if(test(ary[i])) {
        passed.push(ary[i])
      }
    }
    return passed
  },

  //map：把每一个函数返回值都收集起来
  map: function map(ary, mapper) {
    var result = []
    for(var i = 0; i < ary.length; i++) {
      result.push(mapper(ary[i], i, ary))
    }
    return result
  },

  //把每个返回值继续用那个函数迭代
  reduce: function reduce(ary, reducer, initialVal) {
    for (var i = 0; i < ary.length; i++) {
      initialVal = reducer(initialVal, ary[i]) 
    }
    return initialVal
  },

  max: function max(){
    var max = -Infinity
    for(var i = 0; i < arguments.length; i++) {
      if(arguments[i] > max) {
        max = arguments[i]
      }
    }
    return max
  },

  bind: function bind(f, ...fixedArgs) {
    return function(...args){
      return f(...fixedArgs, ...args)
    }
  },

  //如果不使用...来表示
  bind: function bind(f) {
    var fixedArgs = Array.from(arguments).slice(1)
    return function(){
      return f.apply(null, fixedArgs.concat(args))
    }
  },

  

















}

