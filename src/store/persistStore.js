import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './reducers';

const persistConfig = {
 key: 'root', // Key used for the persisted state
 storage, // Storage mechanism (localStorage or sessionStorage)
 whitelist: ['counter'], // Specify the reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;