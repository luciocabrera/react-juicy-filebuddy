import { ODataObject } from './ODataObject';

export class ODataProperty extends ODataObject {
  constructor(odataEntityType, propertyElement) {
    super();
    this.odataEntityType = odataEntityType;
    this.element = propertyElement;
  }

  getEntityType() {
    return this.odataEntityType;
  }

  getName() {
    return this.element.getAttribute('Name');
  }

  getType() {
    return this.element.getAttribute('Type');
  }

  getNullable() {
    return this.element.getAttribute('Nullable');
  }

  getMaxLength() {
    return this.element.getAttribute('MaxLength');
  }

  getFixedLength() {
    return this.element.getAttribute('FixedLength');
  }

  getUnicode() {
    return this.element.getAttribute('Unicode');
  }

  getCollation() {
    return this.element.getAttribute('Collation');
  }

  getConcurrencyMode() {
    return this.element.getAttribute('ConcurrencyMode');
  }

  getDefault() {
    return this.element.getAttribute('Default');
  }

  getPrecision() {
    return this.element.getAttribute('Precision');
  }

  getScale() {
    return this.element.getAttribute('Scale');
  }

  toObject() {
    return {
      name: this.getName(),
      type: this.getType(),
      nullable: this.getNullable(),
      maxLength: this.getMaxLength(),
      fixedLength: this.getFixedLength(),
      unicode: this.getUnicode(),
      collation: this.getCollation(),
      concurrencyMode: this.getConcurrencyMode(),
      defaultValue: this.getDefault(),
      precision: this.getPrecision(),
      scale: this.getScale(),
      annotations: this.getAnnotations().map(annotation =>
        annotation.toObject()
      )
    };
  }
}
