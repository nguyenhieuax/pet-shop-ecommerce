import axios from 'axios'

const baseURL = 'http://localhost:8080/'

export const fetch = (method, path, params) => {
    if (!params) {
        params = {}
    }
    let config = {
        'Content-Type': 'application/json',
    }
    axios.get(baseURL + path, config)
        .then(response => {
            return {
                ...response
            }
        })
        .catch(error => console.log(error))
}