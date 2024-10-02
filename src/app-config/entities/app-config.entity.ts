// appConfig.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AppConfig extends Document {
  @Prop({ required: true, unique: true })
  key: string;

  @Prop({ required: false, type: Object }) // Mark as optional
  value: any;
}

export const AppConfigSchema = SchemaFactory.createForClass(AppConfig);
