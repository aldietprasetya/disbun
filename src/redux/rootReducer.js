import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import authReducer from './slices/auth';

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'ff-',
  whitelist: ['settings'],
};
const authPersistConfig = {
  key: 'auth',
  storage,
  keyPrefix: 'ff-',
  // whitelist: ['isAuthenticated'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export { rootPersistConfig, rootReducer };
