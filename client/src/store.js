import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './reducers/userReducers'
import { companiesReducer, companyDetailsReducer } from './reducers/companyReducers';

const reducer = combineReducers({
    auth: authReducer,
    companies: companiesReducer,
    companyDetails: companyDetailsReducer,

})

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['auth']
// }

// const persistedReducer = persistReducer(persistConfig, reducer);


let initialState = {}

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...
    middleware
)))

// export const persistor = persistStore(store);

export default store;
