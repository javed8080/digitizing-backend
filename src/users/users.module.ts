import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity'; // Import your User entity and schema
import { ProjectModules, ProjectModulesSchema } from 'src/user-module/entities/project-modules.entity';


@Module({
  imports: [
    // MongooseModule.forFeature([{ name: User.name, schema: StudentSchema }]), // Register the Mongoose schema here
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: ProjectModules.name, schema: ProjectModulesSchema }, // Include the Module schema here
    ]),
    

  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [MongooseModule , UsersService]
})
export class UsersModule {}
