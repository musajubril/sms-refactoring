/* eslint-disable no-param-reassign */
import axios from 'axios'

const apiToken = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL
})

apiToken.interceptors.request.use(
  (config) => {
    // Add authorization key to config object if it exist
    const easysch_token = localStorage.getItem('easysch_token')
    if (easysch_token) {
      config.headers.Authorization = `Bearer ${easysch_token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)
export const apiDownloadToken = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL,
  responseType: 'blob'
})

apiDownloadToken.interceptors.request.use(
  (config) => {
    // Add authorization key to config object if it exist
    const easysch_token = localStorage.getItem('easysch_token')
    if (easysch_token) {
      config.headers.Authorization = `Bearer ${easysch_token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

export default apiToken
