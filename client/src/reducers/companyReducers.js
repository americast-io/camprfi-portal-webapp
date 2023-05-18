import {
    ALL_COMPANIES_REQUEST,
    ALL_COMPANIES_SUCCESS,
    ALL_COMPANIES_FAIL,
    CLEAR_ERRORS
} from '../constants/companyConstants';


export const companiesReducer = (state = { companies: [] }, action) => {
    switch(action.type){
        case ALL_COMPANIES_REQUEST:
            return {
                loading: true,
                companies: []
            }

        case ALL_COMPANIES_SUCCESS:
            return {
                loading: false,
                companies: action.payload
            }

        case ALL_COMPANIES_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default: 
            return state;

    }
}