import { Injectable } from '@nestjs/common';

// Import the ConfigCat JavaScript SSR client SDK
import * as configcat from 'configcat-js-ssr';

@Injectable()
export class ConfigCatService {
  private canShowMileageFeature: boolean;
  private readonly configcatclient = configcat.createClient(
    'YOUR_CONFIGCAT_SDK_KEY',
  );

  init() {
    this.configcatclient.getValue('canshowmileagefeature', false, (value) => {
      this.canShowMileageFeature = value;
    });
  }

  getFeatureStatus() {
    return this.canShowMileageFeature;
  }
}
