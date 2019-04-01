import store from './store';
import actionTypes from './actionTypes';
import Service from './lib/util/OData/Service';
import Table from './lib/util/OData/Table';
import DataSet from './lib/util/OData/ODataQuery';

export async function getServices() {
  const servicesRaw = (await Service()) || [];
  const services =
    servicesRaw.map(serviceRaw => ({
      label: serviceRaw.LABEL,
      key: serviceRaw.NAME,
      uri: serviceRaw.URI
    })) || [];

  store.dispatch({ type: actionTypes.GET_SERVICES, services });
}

export async function getTables(serviceUri) {
  const tables = (await Table(serviceUri)) || [];
  const selectTables =
    tables.map(table => ({
      label: table.label,
      key: table.value,
      properties: table.properties,
      uri: serviceUri
    })) || [];

  store.dispatch({ type: actionTypes.GET_TABLES, selectTables });
}

export async function getRows(serviceUri) {
  DataSet.get(serviceUri).then(function(data) {
    store.dispatch({ type: actionTypes.GET_ROWS, data });
  });
}

export function selectService(selectedService) {
  const state = store.getState();

  if (
    state.selectedService &&
    store.getState().selectedService.key === selectedService
  )
    return;

  store.dispatch({ type: actionTypes.SELECT_SERVICE, selectedService });
}


export function selectTable(selectedTable) {
  const state = store.getState();

  if (
    state.selectedTable &&
    store.getState().selectedTable.key === selectedTable
  )
    return;

  store.dispatch({ type: actionTypes.SELECT_TABLE, selectedTable });
}