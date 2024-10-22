import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { CreateClientDto, CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await this.hashPasword(createUserDto.password);
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }
  async registerClient(dto: CreateClientDto): Promise<User> {
    let user: any = await this.userModel.findOne({ email: dto.email });
    if (user) {
      throw new HttpException('email already exists', HttpStatus.BAD_REQUEST);
    }
    dto.password = await this.hashPasword(dto.password);
    const newUser = new this.userModel(dto);
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    const studentData = await this.userModel.find();
    if (!studentData || studentData.length == 0) {
      throw new NotFoundException('Students data not found!');
    }
    return studentData;
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findUser(username: string) {
    return await this.userModel.find((user) => user.username === username);
  }

  async findOneWithUserName(username: string) {
    return await this.userModel.findOne({ username }).lean().exec();
  }

  async hashPasword(pass: string) {
    const password = await bcrypt.hash(pass, 10);
    return password;
  }
}
