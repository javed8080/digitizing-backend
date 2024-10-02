import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOneWithUserName(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {

    const { username, name } = user;

    const payload = {
      username: user.username,
      sub: {
        name: user.name,
      },
    };    
    return {
      ...user,
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }

  async refreshToken(user: User) {
    const payload = {
      username: user.username,
      sub: {
        name: user.name,
      },
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }


  // https://chat.openai.com/c/422df58d-83ba-4ced-90b9-d4288a82019e

  // dynamic.guard.ts
// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Module } from './module.model'; // You need to define a Module model
// import { User } from './user.model'; // You need to define a User model

// @Injectable()
// export class DynamicGuard implements CanActivate {
//   constructor() {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const request = context.switchToHttp().getRequest();
//     const user = request.user as User;
//     const moduleName = request.params.moduleName;
//     const permissionType = request.params.permissionType;

//     // Query the database to get the module permissions
//     const module: Module | null = await Module.findOne({ name: moduleName }).exec();

//     if (!module) {
//       return false; // Module not found
//     }

//     // Check if the user has the required permission for the specified operation
//     if (user.modulePermissions.find((mp) => mp.module.equals(module._id) && mp.permissions.includes(permissionType))) {
//       return true;
//     }

//     return false;
//   }
// }


}