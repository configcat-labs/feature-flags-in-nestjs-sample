import { Injectable } from '@nestjs/common';
import * as configcat from '@configcat/sdk';
import type { IConfigCatClient } from '@configcat/sdk';

@Injectable()
export class ConfigCatService {
  private readonly configCatClient: IConfigCatClient;

  constructor() {
    this.configCatClient = configcat.getClient('YOUR-CONFIGCAT-SDK-KEY');
  }

  async getValue(key: string, defaultValue: boolean): Promise<boolean> {
    return this.configCatClient.getValueAsync(key, defaultValue);
  }
}
