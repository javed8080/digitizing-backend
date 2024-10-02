import { Module } from '@nestjs/common';
import { UserModuleService } from './user-module.service';
import { UserModuleController } from './user-module.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModules, ProjectModulesSchema } from './entities/project-modules.entity';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: User.name, schema: StudentSchema }]), // Register the Mongoose schema here
    MongooseModule.forFeature([
      { name: ProjectModules.name, schema: ProjectModulesSchema }, // Include the Module schema here
    ]),
    

  ],
  controllers: [UserModuleController],
  providers: [UserModuleService],
})
export class UserModuleModule {}
