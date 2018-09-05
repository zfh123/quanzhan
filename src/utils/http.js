import axios from "axios";

function http(config) {
    return new Promise((resolve, reject) => {
        axios(config)
        .then(response => {
            // TODO 正确的返回数据处理
            resolve(response.data);
        })
        .catch(err => {
            // TODO  错误的处理提示
            reject(err);
        });
    });
}

/**
 * 封装get方法
 * @param url 要请求的url地址
 * @param params 请求的参数
 * @returns {Promise}
 */
export function fetch(url, params = {}) {
    return http({
        method: "GET",
        url: url,
        params: params,
        headers: {
            
        }
    });
}

/**
 * 封装post请求
 * @param url 要请求的url地址
 * @param data 请求的参数
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return http({
        method: "POST",
        url: url,
        data: qs.stringify(data, { allowDots: true }),
        headers: {
            
        }
    });
}

/**
 * 封装patch请求
 * @param url 要请求的url地址
 * @param data 请求的参数
 * @returns {Promise}
 */

export function patch(url, data = {}) {
    return http({
        method: "PATCH",
        url: url,
        data: data,
        headers: {
            
        }
    });
}

/**
 * 封装put请求
 * @param url 要请求的url地址
 * @param data 请求的参数
 * @returns {Promise}
 */

export function put(url, data = {}) {
    return http({
        method: "PUT",
        url: url,
        data: data,
        headers: {
            
        }
    });
}