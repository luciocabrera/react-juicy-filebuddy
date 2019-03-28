import { ODataClient } from './../../odata-client';
import { APP_SERVICE_NAME , APP_MAIN_ENTITY_SET_NAME } from './../../../constants';

export default async () => {

  const juicyClient = new ODataClient('/service/' + APP_SERVICE_NAME);
  const odataModel = juicyClient.getODataModel();
  const schema = await odataModel.getSchema('Entities');
  const entityContainer = schema.getEntityContainer();
  const servicesEntitySet = entityContainer.getEntitySet(APP_MAIN_ENTITY_SET_NAME);
  const services = await servicesEntitySet.getEntities();

  return services;
};
