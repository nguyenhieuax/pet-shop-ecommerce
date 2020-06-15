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
    let config = {
    //   'content-type': 'application/x-www-form-urlencoded',
    }

    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: baseURL + path,
            // headers: config,
            data: params,
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