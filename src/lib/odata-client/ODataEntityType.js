import { ODataObject } from './ODataObject';
import { ODataProperty } from './ODataProperty';

export class ODataEntityType extends ODataObject {
  constructor(odataSchema, entityTypeElement) {
    super();
    this.odataSchema = odataSchema;
    this.element = entityTypeElement;
    this.keyPropertyNames = null;
    this.properties = null;
  }

  getSchema() {
    return this.odataSchema;
  }

  getName() {
    return this.element.getAttribute('Name');
  }

  getKeyPropertyNames() {
    if (this.keyPropertyNames === null) {
      const keyElement = this.element.querySelector('Key');

      if (keyElement === null) {
        return [];
      }

      this.keyPropertyNames = Array.from(
        keyElement.querySelectorAll('PropertyRef')
      ).map(propertyRefElement => propertyRefElement.getAttribute('Name'));
    }

    return this.keyPropertyNames;
  }

  getProperties() {
    if (this.properties === null) {
      this.properties = Array.from(
        this.element.querySelectorAll('Property')
      ).map(propertyElement => new ODataProperty(this, propertyElement));
    }

    return this.properties;
  }

  getProperty(name) {
    return this.getProperties().find(property => property.getName() === name);
  }

  toObject() {
    return {
      name: this.getName(),
      keyPropertyNames: this.getKeyPropertyNames(),
      properties: this.getProperties().map(property => property.toObject()),
      annotations: this.getAnnotations().map(annotation =>
        annotation.toObject()
      )
    };
  }
}
