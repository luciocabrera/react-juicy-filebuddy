import { ODataModel } from "./ODataModel";

export class ODataClient {
  constructor(serviceUri) {
    this.serviceUri = serviceUri;
  }

  getODataModel() {
    return new ODataModel(this.serviceUri);
  }
}
