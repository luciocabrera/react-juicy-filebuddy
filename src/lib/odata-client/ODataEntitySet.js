import axios from "axios";

import { ODataObject } from "./ODataObject";

export class ODataEntitySet extends ODataObject {
  constructor(odataEntityContainer, entitySetElement) {
    super();
    this.odataEntityContainer = odataEntityContainer;
    this.element = entitySetElement;
    this.serviceUri = null;
  }

  getEntityContainer() {
    return this.odataEntityContainer;
  }

  getName() {
    return this.element.getAttribute("Name");
  }

  getEntityTypeName() {
    return this.element.getAttribute("EntityType");
  }

  async getEntity(key, query) {
    const response = await axios.get(this._getEntitySetUri({ key, query }), {
      responseType: "json",
      transformResponse: [data => data.d]
    });

    return response.data;
  }

  async getEntities(query) {
    const response = await axios.get(this._getEntitySetUri({ query }), {
      responseType: "json",
      transformResponse: [data => data.d.results]
    });

    return response.data;
  }

  async getEntityCount() {
    const response = await axios.get(`${this._getEntitySetUri()}/$count`, {
      responseType: "text",
      transformResponse: [data => parseInt(data, 10)]
    });

    return response.data;
  }

  toObject() {
    return {
      name: this.getName(),
      entityTypeName: this.getEntityTypeName(),
      annotations: this.getAnnotations().map(annotation =>
        annotation.toObject()
      )
    };
  }

  _getServiceUri() {
    if (this.serviceUri === null) {
      this.serviceUri = this.odataEntityContainer
        .getSchema()
        .getModel().serviceUri;
    }

    return this.serviceUri;
  }

  _getEntitySetUri({ query = null, key = null } = {}) {
    let uri = `${this._getServiceUri()}/${this.getName()}`;

    if (key !== null) {
      uri += "(";
      uri += Object.entries(key)
        .map(keyValueTuple => keyValueTuple.join("="))
        .join("&");
      uri += ")";
    }

    if (query !== null) {
      uri += "?";
      uri += query.toString();
    }

    return uri;
  }
}
