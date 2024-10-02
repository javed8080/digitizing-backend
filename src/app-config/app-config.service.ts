// appConfig.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppConfig } from './entities/app-config.entity';

@Injectable()
export class AppConfigService {
  constructor(@InjectModel(AppConfig.name) private readonly appConfigModel: Model<AppConfig>) { }

  async ensureKeysExist(keyValuePairs: { key: string; value: any }[]): Promise<void> {
    for (const { key, value } of keyValuePairs) {
      const existingConfig = await this.appConfigModel.findOne({ key });

      if (!existingConfig) {
        // If the key doesn't exist, add it with the specified value
        await this.appConfigModel.create({ key, value });
      }
    }
  }



  async findAll() {


    try {
      const data = await this.appConfigModel.find();
      const mergeData: any = {}
      
      for (const { key, value } of data) {
        mergeData[key] = value;
      }
      return mergeData;
    } catch (error) {
      return error;
    }


  }
}
