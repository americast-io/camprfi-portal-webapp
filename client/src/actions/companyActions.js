import axios from 'axios';

import {
    ALL_COMPANIES_REQUEST,
    ALL_COMPANIES_SUCCESS,
    ALL_COMPANIES_FAIL,
    CLEAR_ERRORS
} from '../constants/companyConstants';

import {
    getAllCompanies,

} from '../services/internalApiService';


export const handleGetAllCompanies = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_COMPANIES_REQUEST })

        const data = await getAllCompanies()
        console.log(data)

        dispatch({
            type: ALL_COMPANIES_SUCCESS,
            payload: data
        })



    }catch (error) {
        dispatch({
            type: ALL_COMPANIES_FAIL,
            payload: error.response.data.message
        })

    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        typr: CLEAR_ERRORS
    })
}
