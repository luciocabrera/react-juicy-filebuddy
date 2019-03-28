import { ODataEntitySet } from './ODataEntitySet';
import { ODataObject } from './ODataObject';

export class ODataEntityContainer extends ODataObject {
  constructor(odataSchema, entityContainerElement) {
    super();
    this.odataSchema = odataSchema;
    this.element = entityContainerElement;
    this.entitySets = null;
  }

  getSchema() {
    return this.odataSchema;
  }

  getName() {
    return this.element.getAttribute('Name');
  }

  getEntitySets() {
    if (this.entitySets === null) {
      this.entitySets = Array.from(
        this.element.querySelectorAll('EntitySet')
      ).map(entitySetElement => new ODataEntitySet(this, entitySetElement));
    }

    return this.entitySets;
  }

  getEntitySet(name) {
    return this.getEntitySets().find(entitySet => entitySet.getName() === name);
  }

  toObject() {
    return {
      name: this.getName(),
      entitySets: this.getEntitySets().map(entitySet => entitySet.toObject()),
      annotations: this.getAnnotations().map(annotation =>
        annotation.toObject()
      )
    };
  }
}
