import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'; // Import mongoose
import { Document } from 'mongoose';
import { ProjectModules } from 'src/user-module/entities/project-modules.entity';
import { generateUniqueInteger } from 'src/utils/unique-id-generator';

@Schema({
  versionKey: false,
  timestamps: true,
})
export class User extends Document {
  @Prop({ default: generateUniqueInteger })
  _id: number;

  @Prop({ default: null })
  name: string;

  @Prop({ default: null })
  email: string;

  @Prop({ default: null, unique: true })
  username: string;

  @Prop({ default: null })
  password: string;

  @Prop({ default: null })
  status: string;

  @Prop({ default: null })
  role: string;

  @Prop({ default: null })
  activation_code: String;

  @Prop({ default: null })
  is_verified: boolean;

  @Prop({ default: null, type: {} })
  profile: any;

  @Prop({
    type: [
      {
        moduleId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: ProjectModules.name,
        },
        module: {
          name: String,
        },
        permissions: {
          read: Boolean,
          write: Boolean,
          update: Boolean,
          delete: Boolean,
        },
      },
    ],
  })
  modulePermissions: {
    moduleId: mongoose.Schema.Types.ObjectId;
    module: {
      name: string;
    };
    permissions: {
      read: boolean;
      write: boolean;
      update: boolean;
      delete: boolean;
    };
  }[];
}

export const UserSchema = SchemaFactory.createForClass(User);
