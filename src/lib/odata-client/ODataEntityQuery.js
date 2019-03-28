export class ODataEntityQuery {
  constructor({ select, filter, top, skip, orderBy, format }) {
    this.select = select;
    this.filter = filter;
    this.top = top;
    this.skip = skip;
    this.orderBy = orderBy;
    this.format = format;
  }

  getSelect() {
    return this.select;
  }

  getFilter() {
    return this.filter;
  }

  getTop() {
    return this.top;
  }

  getSkip() {
    return this.skip;
  }

  getOrderBy() {
    return this.orderBy;
  }

  getFormat() {
    return this.format;
  }

  toString() {
    const queryStringParts = [];
    let queryString = "";

    if (this.getSelect() !== undefined) {
      queryString = "$select=";
      queryString += this.getSelect().join(",");
      queryStringParts.push(queryString);
    }

    if (this.getFilter() !== undefined) {
      queryString = "$filter=";
      queryString += this.getFilter().toString();
      queryStringParts.push(queryString);
    }

    if (this.getTop() !== undefined) {
      queryString = "$top=";
      queryString += parseInt(this.getTop(), 10);
      queryStringParts.push(queryString);
    }

    if (this.getSkip() !== undefined) {
      queryString = "$skip=";
      queryString += parseInt(this.getSkip(), 10);
      queryStringParts.push(queryString);
    }

    if (this.getOrderBy() !== undefined) {
      queryString = "$orderby=";
      queryString += this.getOrderBy()
        .map(orderByExpression => orderByExpression.toString())
        .join(",");
      queryStringParts.push(queryString);
    }

    if (this.getFormat() !== undefined) {
      queryString = "$format=";
      queryString += this.getFormat();
      queryStringParts.push(queryString);
    }

    return queryStringParts.join("&");
  }
}
