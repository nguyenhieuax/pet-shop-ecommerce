import axios from 'axios'

// const baseURL = 'http://localhost:5000'
const baseURL = 'https://all4petbackend.herokuapp.com/'
// const baseURL = 'http://all4pet-env-2.eba-vdzteyuu.us-east-2.elasticbeanstalk.com/'


const token = localStorage.getItem('loginToken') || '';

export const fetch = (method, path, params) => {
    console.log('axios params-----------------', params);
    console.log(method);
    console.log('path =====', path);
    // console.log(axios.method)
    if (!params) {
        params = {}
    }
    let configShowCart = {
        Authorization: `Bearer ${token}`
    }

    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: baseURL + path,
            headers: path ==='cart/showCart' || path ==='user/showProfile' || path.includes('cart/add') ? configShowCart : null,
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