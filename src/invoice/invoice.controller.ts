import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException, UsePipes, ValidationPipe } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Invoice")
@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createInvoiceDto: CreateInvoiceDto) {

    try {
      const data = await this.invoiceService.create(createInvoiceDto)
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

    // return await this.invoiceService.create(createInvoiceDto);
  }

  @Get()
  findAll() {
    return this.invoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoiceService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {


    try {
      const data = await this.invoiceService.update(id, updateInvoiceDto)
      return {
        message: "updated",
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
    
    // return this.invoiceService.update(+id, updateInvoiceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    
    try {
      const data = await this.invoiceService.remove(id);
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
