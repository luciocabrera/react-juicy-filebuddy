export class ODataAnnotation {
  constructor(annotationAttributes) {
    this.annotationAttributes = annotationAttributes;
  }

  getNamespaceName() {
    return this.annotationAttributes.namespaceName;
  }

  getLocalName() {
    return this.annotationAttributes.localName;
  }

  getValue() {
    return this.annotationAttributes.value;
  }

  toObject() {
    return {
      namespaceName: this.getNamespaceName(),
      localName: this.getLocalName(),
      value: this.getValue()
    };
  }
}
