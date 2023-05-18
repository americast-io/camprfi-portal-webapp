import axios from 'axios';

import {
    ALL_COMPANIES_REQUEST,
    ALL_COMPANIES_SUCCESS,
    ALL_COMPANIES_FAIL,
    COMPANY_DETAILS_REQUEST,
    COMPANY_DETAILS_SUCCESS,
    COMPANY_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/companyConstants';

import {
    getAllCompanies,
    getCompanyById,

} from '../services/internalApiService';


export const handleGetAllCompanies = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_COMPANIES_REQUEST })

        const data = await getAllCompanies()

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

export const handleGetCompanyById = (id) => async (dispatch) => {
    try {
        
        dispatch({ type: COMPANY_DETAILS_REQUEST})
        const data = await getCompanyById(id);

        dispatch({
            type: COMPANY_DETAILS_SUCCESS,
            payload: data
        })
    }catch (error) {
        dispatch({
            type: COMPANY_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}
