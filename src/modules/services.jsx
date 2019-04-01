import { ADD_ENTITIES, addEntities } from '../actions';
import Service from '../../lib/util/OData/Service';

export const STATE_KEY = 'services';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ADD_ENTITIES:
      return {
        ...state,
        ...action.payload.services
      };

    default:
      return state;
  }
}
export const getServices = ({ page = 0 } = {}) => dispatch => {
  return Service()
    .then(services => {
      const selectServices =
        services.map(service => ({
          label: service.LABEL,
          key: service.NAME,
          uri: service.URI
        })) || [];

      dispatch(addEntities(selectServices));
      return selectServices;
    })
    .catch(error => {
      console.error(error);
    });
};
