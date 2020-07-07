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
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjdXN0b21lcjE4IiwiaWF0IjoxNTk0MDIyNzY1LCJleHAiOjE1OTQwNzY3NjV9.i0EkG3BOZ3S5fpMV6a6c3pcqTvYV9xwTMNYzodzxoJgBTrqfIsR9xj8AidhUKMrSFgEmGA9ap_CXkL__DGqERw'
    }

    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: baseURL + path,
            headers: path ==='showCart' ? config : null,
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