import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import themeReducer from './themeSlice';

const rootReducer = combineReducers({
    theme: themeReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["themeReducer"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
