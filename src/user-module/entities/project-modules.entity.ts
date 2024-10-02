import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose';

@Schema({ versionKey: false }) // Set versionKey to false to exclude __v field
export class ProjectModules extends Document {
   @Prop()
   name: string;
}


export const ProjectModulesSchema = SchemaFactory.createForClass(ProjectModules);






