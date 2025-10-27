import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigCatService } from './configcat.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ConfigCatService],
})
export class AppModule {}
