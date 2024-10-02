import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, HttpException, HttpStatus, Query } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { ApiBody } from '@nestjs/swagger';
import { validate } from 'class-validator';
import { CreateVectorQuoteDto } from './dto/vector-quote.dto';
import { CreateDigitizingQuoteDto } from './dto/digitizing-quote.dto';
import { CreatePatchQuoteDto } from './dto/patch-quote.dto';

@Controller('quote')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) { }

  
  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: CreateDigitizingQuoteDto, required: false })
  async create(@Body() body: CreateDigitizingQuoteDto | CreateVectorQuoteDto | CreatePatchQuoteDto
  ) {

    let dto;
    // Check the type received in the POST request
    if (body.quoteType === 'digitizing') {
      dto = new CreateDigitizingQuoteDto();
    } else if (body.quoteType === 'vector') {
      dto = new CreateVectorQuoteDto();
    } else if (body.quoteType === 'patch') {
      dto = new CreatePatchQuoteDto();
    } else {

      throw new HttpException({
        message: ['Invalid order type'],
        error: 'Bad Request ss',
        statusCode: HttpStatus.BAD_REQUEST,
      }, HttpStatus.BAD_REQUEST);
    }

    Object.assign(dto, body);

    const validatedData = await validate(dto, body);

    if (validatedData.length > 0) {

      throw new HttpException({
        message: validatedData.map(error => Object.values(error.constraints)).flat(),
        error: 'Bad Request ss',
        statusCode: HttpStatus.BAD_REQUEST,
      }, HttpStatus.BAD_REQUEST);
    }

    try {
      const data = await this.quoteService.create(dto)
      return {
        message: "created",
        data: data,
        statusCode: HttpStatus.CREATED,
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


  @Post("/vector")
  @ApiBody({ type: CreateVectorQuoteDto, required: false })
  async vector(body: CreateVectorQuoteDto) {

    return { status: true }
  }

  @Get('type/:type')
  async findAll(@Param('type') type: string , @Query() query?: any) {
    try {
      const data =  await this.quoteService.findAll(type,query);
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

  @Get(':id/type/:type')
  async findOne(@Param('id') id: any, @Param('type') type: string) {
    return await this.quoteService.findOne(id, type);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: CreateDigitizingQuoteDto, required: false })
  async update(@Param('id') id: string, @Body() body: CreateDigitizingQuoteDto | CreateVectorQuoteDto) {

    try {
      const data = await this.quoteService.update(id, body);
      return {
        message: "updated",
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

  @Delete(':id')
  async remove(@Param('id') id: string) {

    try {
      const data = await this.quoteService.remove(id);
      return {
        message: "deleted",
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
