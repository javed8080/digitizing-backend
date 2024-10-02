import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

import { Model } from "mongoose";
import { Invoice } from './entities/invoice.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class InvoiceService {

  constructor(
    @InjectModel(Invoice.name) private invoice: Model<Invoice>
  ) { }

  async create(createInvoiceDto: CreateInvoiceDto) {
    // return 'This action adds a new invoice';
    try {
      const data =  await this.invoice.create(createInvoiceDto);
      // "orders":[{"order_id":1 , "children":[1,2,3,4]}]
      return data;
    } catch (error) {
      return error;
    }
  }

  findAll() {
    // return `This action returns all invoice`;
    const data =  this.invoice.find();
    return data;
  }

  findOne(id: any) {
    // return `This action returns a #${id} invoice`;
    const data =  this.invoice.findOne(id);
    return data;
  }

  async update(id: any, updateInvoiceDto: UpdateInvoiceDto) {

    try {
      const data = this.invoice.findByIdAndUpdate(id, updateInvoiceDto);
      return data;
    } catch (error) {
      return error;
    }
  }

  async remove(id: any) {
    try {
      const data = await this.invoice.findByIdAndDelete(id);
      return data;
    } catch (error) {
      return error;
    }
  }
}
