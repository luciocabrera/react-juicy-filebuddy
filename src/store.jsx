import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
  i18nReducer
} from 'react-redux-i18n';
//import { translationsObject } from './i18n/translations';
import { translationsObject } from './i18n/i18n';
console.log(translationsObject);
const reducers = combineReducers({
  i18n: i18nReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('es'));

export default store;
