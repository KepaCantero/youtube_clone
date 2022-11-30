import axios from 'axios'

export default axios.create({
    baseURL: 'https://www.googlepapis.com/youtube/v3?',
    params:{
        part: 'snipet',
        maxResults: 5,
        key: 'AIzaSyDV1B3RYBnddaeNDs3VJPoUVR-XJgtLsTA'
    }
})
