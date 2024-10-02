import { Injectable } from '@nestjs/common';
import { CreateUserModuleDto } from './dto/create-user-module.dto';
import { UpdateUserModuleDto } from './dto/update-user-module.dto';
import { ProjectModules } from './entities/project-modules.entity';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserModuleService {

  constructor(@InjectModel(ProjectModules.name) private projectModules: Model<ProjectModules>) { }

  async create(createUserModuleDto: CreateUserModuleDto) : Promise<ProjectModules>{
    const data = new this.projectModules(createUserModuleDto);
    return data.save();
  }

  // async findAll() {
  //   return `This action returns all userModule`;
  // }

  // async create(createUserDto: CreateUserDto): Promise<User> {
    
  // }

  async findAll(): Promise<ProjectModules[]> {
    const data = await this.projectModules.find();
    return data;
  }


  findOne(id: number) {
    return `This action returns a #${id} userModule`;
  }

  update(id: number, updateUserModuleDto: UpdateUserModuleDto) {
    return `This action updates a #${id} userModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} userModule`;
  }
}
