import { Injectable } from '@nestjs/common';

// Import the ConfigCat JavaScript SSR client SDK
import * as configcat from 'configcat-js-ssr';

@Injectable()
export class ConfigCatService {
  private readonly configcatclient = configcat.createClient(
    'YOUR_CONFIGCAT_SDK_KEY',
  );

  getFeatureStatus() {
    const canShowMileageFeature = this.configcatclient
      .getValueAsync('canshowmileagefeature', false)
      .then((value) => {
        return value;
      });
    return canShowMileageFeature;
  }
}
