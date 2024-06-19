import axios, {AxiosInstance} from 'axios'

export const $api: AxiosInstance = axios.create({
    baseURL: "https://api.kinopoisk.dev/v1.4/",
    headers: {
        "X-API-KEY": "RREFY7V-4PY4YDX-KDH1NKW-QQC3F3A"
    }
})