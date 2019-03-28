import axios from "axios";

import { ODataObject } from "./ODataObject";
import { ODataSchema } from "./ODataSchema";

export class ODataModel extends ODataObject {
  constructor(serviceUri) {
    super();
    this.serviceUri = serviceUri;
    this.schemas = null;
  }

  async getSchemas() {
    if (this.schemas === null) {
      const metadataResponse = await axios.get(`${this.serviceUri}/$metadata`, {
        responseType: "document"
      });

      const metadataDocument = metadataResponse.data;

      this.schemas = Array.from(
        metadataDocument.querySelectorAll("Schema")
      ).map(schemaElement => new ODataSchema(this, schemaElement));
    }

    return this.schemas;
  }

  async getSchema(namespaceName) {
    const schemas = await this.getSchemas();
    return schemas.find(schema => schema.getNamespaceName() === namespaceName);
  }

  async toObject() {
    const schemas = await this.getSchemas();

    return {
      schemas: schemas.map(schema => schema.toObject())
    };
  }
}
