import { ODataEntityContainer } from './ODataEntityContainer';
import { ODataEntityType } from './ODataEntityType';
import { ODataObject } from './ODataObject';

export class ODataSchema extends ODataObject {
  constructor(odataModel, schemaElement) {
    super();
    this.odataModel = odataModel;
    this.element = schemaElement;
    this.entityTypes = null;
    this.entityContainer = null;
  }

  getModel() {
    return this.odataModel;
  }

  getNamespaceName() {
    return this.element.getAttribute('Namespace');
  }

  getEntityTypes() {
    if (this.entityTypes === null) {
      this.entityTypes = Array.from(
        this.element.querySelectorAll('EntityType')
      ).map(entityTypeElement => new ODataEntityType(this, entityTypeElement));
    }

    return this.entityTypes;
  }

  getEntityType(name) {
    return this.getEntityTypes().find(
      entityType => entityType.getName() === name
    );
  }

  getEntityContainer() {
    if (this.entityContainer === null) {
      const entityContainerElement = this.element.querySelector(
        'EntityContainer'
      );

      if (entityContainerElement === null) {
        return null;
      }

      this.entityContainer = new ODataEntityContainer(
        this,
        entityContainerElement
      );
    }

    return this.entityContainer;
  }

  toObject() {
    const entityContainer = this.getEntityContainer();

    return {
      namespaceName: this.getNamespaceName(),
      entityTypes: this.getEntityTypes().map(entityType =>
        entityType.toObject()
      ),
      entityContainer:
        entityContainer === null ? null : entityContainer.toObject(),
      annotations: this.getAnnotations().map(annotation =>
        annotation.toObject()
      )
    };
  }
}
