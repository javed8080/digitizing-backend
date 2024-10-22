import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { CreateClientDto, CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { ResponseHelper } from 'src/utils/response/response.helper';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RefreshJwtGuard } from './guards/refresh-jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private userService: UsersService,
    private readonly responseHelper: ResponseHelper,
  ) {}

  @ApiOperation({ summary: 'Login with username and password' })
  @ApiResponse({ status: 200, description: 'Login successful' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: LoginDto })
  async login(
    @Req() req: any,
    @Res() res: Response,
    @Body() loginDto: LoginDto,
  ) {
    try {
      const data = await this.authService.login(req.user);
      return this.responseHelper.success({ res, data });
    } catch (error) {
      return this.responseHelper.error({ res, req, error });
    }
  }

  @Post('register')
  @UseInterceptors(FileInterceptor(''))
  async registerUser(
    @Body() dto: CreateUserDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const data = await this.userService.create(dto);
      return await this.responseHelper.success({ res, data });
    } catch (error) {
      return await this.responseHelper.error({ res, req, error });
    }
  }

  @Post('client-register')
  @UseInterceptors(FileInterceptor(''))
  async registerClient(
    @Body() dto: CreateClientDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const data = await this.userService.registerClient(dto);
      return await this.responseHelper.success({ res, data });
    } catch (error) {
      return await this.responseHelper.error({ res, req, error });
    }
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refrshToken(@Req() req) {
    return this.authService.refreshToken(req.user);
  }
}
