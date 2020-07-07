import axios from 'axios'

// const baseURL = 'http://localhost:5000'
const baseURL = 'https://all4petbackend.herokuapp.com/'


export const fetch = (method, path, params) => {
    console.log('axios params-----------------', params);
    console.log(method);
    console.log('path =====', path);
    // console.log(axios.method)
    if (!params) {
        params = {}
    }
    let configShowCart = {
        Authorization: `Bearer ${params}`
    }

    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: baseURL + path,
            headers: path ==='cart/showCart' ? configShowCart : null,
            data:  path ==='cart/showCart' ? null: params,
        })
            .then(response => {
                console.log('data in axios ==============', response)
                resolve(response.data)
            })
            .catch(error => {
                console.log('error --------------', error);
                reject(error)
            })
       
    })
}