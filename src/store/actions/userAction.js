import {GET_USERS, USERS_ERROR} from '../types'
import axios from 'axios'

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://api.unsplash.com/photos/random/?count=50&client_id=eRyRD-k3T5tO9-gM0eYMF8kqsYZqHoJ4mxir0CcjlLY`)
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: USERS_ERROR,
            payload: error,
        })
    }

}