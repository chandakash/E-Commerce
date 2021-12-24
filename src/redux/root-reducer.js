import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer'
import cartReducer from './cart/cartReducer';

const persistConfig = {
    key: 'root', // from where you want to start the storage.
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user : userReducer,
    cart : cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
