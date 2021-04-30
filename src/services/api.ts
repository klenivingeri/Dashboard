import axios from 'axios'

export const api  =  axios.create({
    baseURL: 'https://dashboard-nine-swart.vercel.app/api'
})