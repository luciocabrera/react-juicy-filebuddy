export class ODataOrderByExpression {
  constructor(name, sortDirection = null) {
    this.name = name;
    this.sortDirection = sortDirection;
  }

  getName() {
    return this.name;
  }

  getSortDirection() {
    return this.sortDirection;
  }

  toString() {
    const name = this.getName();
    const sortDirection = this.getSortDirection();

    return sortDirection === null ? name : `${name} ${sortDirection}`;
  }
}
