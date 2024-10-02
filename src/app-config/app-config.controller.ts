import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, HttpException, HttpStatus, Query } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { validate } from 'class-validator';
import { AppConfigService } from './app-config.service';

@ApiTags("app-config")
@Controller('app-config')
export class AppConfigController {
  constructor(private readonly appConfigService: AppConfigService) { }



  @Get('/')
  async findAll() {
    try {
      const data =  await this.appConfigService.findAll();

      return {
        message: "read",
        data: data,
        statusCode: HttpStatus.OK,
      }

    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: error,
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
   
  }

}
