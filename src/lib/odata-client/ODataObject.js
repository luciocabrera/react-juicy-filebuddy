import { ODataAnnotation } from './ODataAnnotation';

export class ODataObject {
  getAnnotations() {
    if (this.element === undefined || this.element === null) {
      return [];
    }

    if (this.annotations === undefined) {
      this.annotations = this.element
        .getAttributeNames()
        .filter(attributeName => attributeName.includes(':'))
        .map(attributeName => {
          const [namespaceName, localName] = attributeName.split(':');
          const value = this.element.getAttribute(attributeName);

          return new ODataAnnotation({ localName, namespaceName, value });
        });
    }

    return this.annotations;
  }

  getAnnotation(localName, namespaceName) {
    return this.getAnnotations().find(annotation =>
      namespaceName === undefined
        ? annotation.getLocalName() === localName
        : annotation.getLocalName() === localName &&
          annotation.getNamespaceName() === namespaceName
    );
  }
}
