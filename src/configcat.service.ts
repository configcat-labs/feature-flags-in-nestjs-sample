import { Injectable } from '@nestjs/common';

// Import the ConfigCat client SDK
const configcat = require("configcat-node");

@Injectable()
export class ConfigCatService {
  private readonly configcatclient = configcat.createClient(
    'YOUR_CONFIGCAT_SDK_KEY',
  );

  getFeatureStatus() {
    return this.configcatclient.getValueAsync('canshowmileagefeature', false);
  }
}
