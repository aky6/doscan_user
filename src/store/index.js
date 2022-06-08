import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';
import logger from "redux-logger";



const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist:[""],
};

let rootReducer = combineReducers({
   
});

const pReducer = persistReducer(persistConfig, rootReducer);


const middlewares = [ReduxThunk];

if(process.env.NODE_ENV === "development")
    {
        middlewares.push(logger); 
        
    }

export const store = createStore(pReducer, applyMiddleware(...middlewares));
window.store = store;
export const persistor = persistStore(store);
window.persistor = persistor;