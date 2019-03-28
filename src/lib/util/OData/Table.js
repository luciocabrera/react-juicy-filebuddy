import { ODataClient } from "./../../odata-client/ODataClient";

export default async serviceUri => {
  const serviceClient = new ODataClient(serviceUri);
  const rolapServiceModel = serviceClient.getODataModel();
  const entitiesSchema = await rolapServiceModel.getSchema("Entities");
  const entityContainer = entitiesSchema.getEntityContainer();
  const entitySets = entityContainer.getEntitySets();
  const schemas = await rolapServiceModel.getSchemas();

  const entityTypes = schemas.reduce((acc, schema) => {
    schema.getEntityTypes().forEach(entityType => {
      const fullyQualifiedEntityTypeName = `${schema.getNamespaceName()}.${entityType.getName()}`;
      acc[fullyQualifiedEntityTypeName] = {
        value: fullyQualifiedEntityTypeName,
        label: fullyQualifiedEntityTypeName,
        name: fullyQualifiedEntityTypeName,
        properties: entityType.getProperties().map(property => {
          return {
            name: property.getName(),
            label: property.getAnnotation("label").getValue()
          };
        })
      };
    });
    return acc;
  }, []);
  return entitySets.map(entitySet => {
    const entityType = entityTypes[entitySet.getEntityTypeName()];
    const entitySetLabelAnnotation = entitySet.getAnnotation("label");
    const entitySetLabel =
      entitySetLabelAnnotation === undefined
        ? entitySet.getName()
        : entitySetLabelAnnotation.getValue();

    return {
      ...entityType,
      label: entitySetLabel,
      entitySet
    };
  });
};
