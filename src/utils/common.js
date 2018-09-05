


//判别函数类型
function typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]'  : 'boolean',
        '[object Number]'   : 'number',
        '[object String]'   : 'string',
        '[object Function]' : 'function',
        '[object Array]'    : 'array',
        '[object Date]'     : 'date',
        '[object RegExp]'   : 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]'     : 'null',
        '[object Object]'   : 'object'
    };
    return map[toString.call(obj)];
}

// deepCopy
function deepCopy(data) {
    const t = typeOf(data);
    let o;

    if (t === 'array') {
        o = [];
    } else if ( t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));//回调函数遍历数组
        }
    } else if ( t === 'object') {
        for (let i in data) {
            o[i] = deepCopy(data[i]);//回调函数遍历函数
        }
    }
    return o;
}

export {deepCopy};

export function isNumber(str) {
    return /^[0-9.]*$/.test(str);
}
  
export function debounce(fn, wait = 250, immediate) {
    let timeout
    return function (...args) {
        const later = () => {
        timeout = null
        if (!immediate) {
            fn.apply(this, args)
        }
        };

        clearTimeout(timeout)
        if (immediate && !timeout) {
        fn.apply(this, args)
        }
        timeout = setTimeout(later, wait)
    }
}

export function throttle(fn, limit = 250) {
    let wait = false

    return function (...args) {
        if (wait) {
        return
        }

        wait = true
        fn.apply(this, args)
        setTimeout(() => {
        wait = false
        }, limit)
    }
}

export function clone(data) {
    return JSON.parse(JSON.stringify(data))
}

export function isObject(v) {
    return Object(v) === v
}

export function isDate(v) {
    return Object.prototype.toString.call(v) === '[object Date]'
}

export function isRegexp(v) {
    return Object.prototype.toString.call(v) === '[object RegExp]'
}


export function isString(v) {
    return typeof v === 'string'
}

export function errAction(response) {
    this.$toast({type: 'danger', content: '网络或服务器异常，保存失败', time: 1500});
    throw new Error(response)
}
  
  