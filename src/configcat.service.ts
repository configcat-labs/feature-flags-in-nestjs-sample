import { Injectable } from '@nestjs/common';
import * as configcat from '@configcat/sdk';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class ConfigCatService {
  private readonly configCatClient: any;

  constructor(configService: ConfigService) {
    const configCatSdkKey = configService.get('CONFIGCAT_SDK_KEY');
    this.configCatClient = configcat.getClient(configCatSdkKey);
  }

  getValue(key: string, defaultValue: any): any {
    return this.configCatClient.getValueAsync(key, defaultValue);
  }
}
