import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigService } from './app-config.service';
import { AppConfig, AppConfigSchema } from './entities/app-config.entity';
import { siteConfig } from 'src/utils/constant';
import { AppConfigController } from './app-config.controller';


@Module({

  imports: [
    MongooseModule.forFeature([
      { name: AppConfig.name, schema: AppConfigSchema },
    ]),
  ],
  controllers: [AppConfigController],
  providers: [AppConfigService],
})
export class AppConfigModule {

  constructor(private readonly appConfigService: AppConfigService) {}

  async onModuleInit(): Promise<void> {
    await this.appConfigService.ensureKeysExist(siteConfig);
  }
}
