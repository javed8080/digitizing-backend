import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Res, HttpStatus, HttpException } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateDigitizingOrderDto } from './dto/digitizing-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { validate } from 'class-validator';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateVectorOrderDto } from './dto/vector-order.dto';
import { CreatePatchOrderDto } from './dto/patch-order.dto';

@ApiTags("Orders")
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: CreateDigitizingOrderDto, required: false })
  async create(@Body() body: CreateDigitizingOrderDto | CreateVectorOrderDto
  ) {

    let dto;
    // Check the type received in the POST request
    if (body.type === 'digitizing') {
      dto = new CreateDigitizingOrderDto();
    } else if (body.type === 'vector') {
      dto = new CreateVectorOrderDto();
    } else if (body.type === 'patch') {
      dto = new CreatePatchOrderDto();
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
      const data = await this.orderService.create(dto)
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
  @ApiBody({ type: CreateVectorOrderDto, required: false })
  async vector(body: CreateVectorOrderDto) {

    return { status: true }
  }

  @Get('type/:type')
  async findAll(@Param('type') type: string) {
    return await this.orderService.findAll(type);
  }

  @Get(':id/type/:type')
  async findOne(@Param('id') id: any, @Param('type') type: string) {
    return await this.orderService.findOne(id, type);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: CreateDigitizingOrderDto, required: false })
  async update(@Param('id') id: string, @Body() body: CreateDigitizingOrderDto | CreateVectorOrderDto) {

    try {
      const data = await this.orderService.update(id, body);
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
      const data = await this.orderService.remove(id);
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
