import axios from 'axios'

const baseURL = 'https://reactnative.dev'

export const fetch = (method, path, params) => {
    if (!params) {
        params = {}
    }
    let config = {
        'Content-Type': 'application/json',
    }
    return new Promise((resolve, reject) => {
        axios.get(baseURL + '/movies.json', config)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error);
            })
    })
}