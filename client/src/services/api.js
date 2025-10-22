import axios from 'axios'

const baseUrl = '/api/cierreViajes'

const getData = async () => {
    try {
        const res = await axios.get(baseUrl)
        return res.data
    } catch (error) {
        console.error('Error al obtener datos: ', error.response?.data || error.message )
        throw error
    }
    
}

export default {
    getData
}