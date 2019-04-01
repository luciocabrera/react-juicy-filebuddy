import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
  i18nReducer
} from 'react-redux-i18n';
import { translationsObject } from './i18n/i18n';
import services from './reducers/services';
import tables from './reducers/tables';
import rows from './reducers/rows';
import selectedService from './reducers/selectedService';
import selectedTable from './reducers/selectedTable';
import { reducer as reduxFormReducer } from 'redux-form';

const reducers = combineReducers({
  services,
  tables,
  rows,
  i18n: i18nReducer,
  selectedService,
  selectedTable,
  form: reduxFormReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('en'));
window.store = store;

export default store;
