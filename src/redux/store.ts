import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage'
import sagas from "./sagas"
import { persistReducer,persistStore } from 'redux-persist'
const persistConfig = {
    key: 'root',
    storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()
const middleware = [ sagaMiddleware]
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
      const newRootReducer = require('./rootReducer').default
      store.replaceReducer(newRootReducer)
    })
  }
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(middleware)
  })
  sagaMiddleware.run(sagas)
  export const persistor = persistStore(store)
  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch