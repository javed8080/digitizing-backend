import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  versionKey: false,
  timestamps: true,
  validateBeforeSave: true,
  autoCreate: true,
})
export class ErrorLog extends Document {
  @Prop({ required: false, default: null })
  user_id?: string;

  @Prop({ required: false, default: null })
  method?: string;

  @Prop({ required: false, default: null })
  status_code?: string;

  @Prop({ required: false, default: null })
  url?: string;

  @Prop({ required: false, default: null })
  error?: string;
}

export const ErrorLogSchema = SchemaFactory.createForClass(ErrorLog);
