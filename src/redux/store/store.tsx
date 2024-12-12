import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from '../reducers/userReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const reducers = combineReducers({
  userRedux: userReducer,
});


const rootReducer = (state: RootState, action: any) => {
  if (action.type === 'auth/clearState') {
    // this applies to all keys defined in persistConfig(s)
    AsyncStorage.removeItem('persist:root');
    state = {};
  }
  return reducers(state, action);
};

const persistConfig = {
  key: 'root',
  timeout: 2000,
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer: any = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
