import { ODataClient, ODataEntityQuery } from "./../../odata-client";
import _ from "lodash";
export default async (table, columns, serviceUri) => {
  //TODO rewrite window.caching fast solution for les server calls
  //   window.caching = window.caching || {};
  //   if (window.caching[(table, columns, serviceUri)]) {
  //     return window.caching[(table, columns, serviceUri)];
  //   }

  const serviceClient = new ODataClient(serviceUri);
  const rolapServiceModel = serviceClient.getODataModel();

  // Fetching data
  const entitiesSchema = await rolapServiceModel.getSchema("Entities");
  const entityContainer = entitiesSchema.getEntityContainer();
  const toiletDataEntitySet = entityContainer.getEntitySet(table);

  const toiletData = await toiletDataEntitySet.getEntities(
    new ODataEntityQuery({
      select: columns,
      top: 10
    })
  );
  //   window.caching[(table, columns, serviceUri)] = toiletData;

  return toiletData;
};
