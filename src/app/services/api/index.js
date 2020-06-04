import axios from 'axios'

// const baseURL = 'https://reactnative.dev'
// const baseURL = 'https://5e9310d9c7393c0016de4492.mockapi.io/'
const baseURL = 'https://all4petbackend.herokuapp.com/'
// const baseURL = 'https://all4petbackend.herokuapp.com/product/bird?type=food&page=1'


export const fetch = (method, path, params) => {
    console.log(method)
    // console.log(axios.method)
    if (!params) {
        params = {}
    }
    let config = {
      'content-type': 'application/x-www-form-urlencoded'
    }

    return new Promise((resolve, reject) => {

        axios({
            method: method,
            url: baseURL + path,
            headers: config,
            params: params,
        })
            .then(response => {
                console.log('data in axios =====================================', response);
                resolve(response.data)
            })
            .catch(error => {
                console.log('error --------------', error);
                reject(error)
            })
    })
}