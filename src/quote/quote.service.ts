import { Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { DigitizingQuote } from './entities/digitizing-quote.entity';
import { PatchQuote } from './entities/patch-quote.entity';
import { VectorQuote } from './entities/vector-quote.entity';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { currentTime } from 'src/utils/unique-id-generator';

@Injectable()
export class QuoteService {

  constructor(
    @InjectModel(DigitizingQuote.name) private digitizingQuote: Model<DigitizingQuote>,
    @InjectModel(PatchQuote.name) private patchQuote: Model<PatchQuote>,
    @InjectModel(VectorQuote.name) private vectorQuote: Model<VectorQuote>
  ) { }

  async create(createQuoteDto: any) {
    try {

      createQuoteDto.date = currentTime()
      createQuoteDto.updatedAt = currentTime()
      
      const data = await this.handleQuoteModelStore(createQuoteDto.quoteType, createQuoteDto);
      return data;
    } catch (error) {
      return error;
    }
  }


  async findAll(type: string , query:any) {


    try {
      const data = await this.findByAllType(type, query);
      return data;
    } catch (error) {
      return error;
    }


  }

  async findOne(id: any, type: string) {
    // return `This action returns a #${id} order`;
    const data = await this.findByOneType(type, id);
    return data;
  }

  async update(id: string, updateOrderDto: any) {

    try {
      const data = await this.handleOrderModelUpdate(updateOrderDto.type, id, updateOrderDto);
      return data;
    } catch (error) {
      return error;
    }

  }

  async remove(id: string) {

    try {
      const data = await this.digitizingQuote.findByIdAndDelete(id);
      return data;
    } catch (error) {
      return error;
    }
  }


  async handleQuoteModelStore(type: string, createQuoteDto: any) {

    let modelRes;
    switch (type) {
      case 'digitizing':
        modelRes = await this.digitizingQuote.create(createQuoteDto);
        break;
      case 'vector':
        modelRes = await this.vectorQuote.create(createQuoteDto);
        break;

      case 'patch':
        modelRes = await this.patchQuote.create(createQuoteDto);
        break;
    }
    return modelRes;
  }


  async findByOneType(type: string, id: any) {

    let modelRes;
    switch (type) {
      case 'digitizing':
        modelRes = await this.digitizingQuote.findOne(id);
        break;
      case 'vector':
        modelRes = await this.vectorQuote.findOne(id);
        break;

      case 'patch':
        modelRes = await this.patchQuote.findOne(id);
        break;
    }
    return modelRes;
  }


  async findByAllType(type: string, params: any) {

    const query : any = {};
    query.quoteType = type;



    if (params.name) {
      query.$or = [
        { name: { $regex: new RegExp(params.name, 'i') } },
        { orderNumber: { $regex: new RegExp(params.name, 'i') } }
      ];
    }

    const page = parseInt(params.page, 10) || 1;
    const limit = parseInt(params.pageSize, 10) || 10;
    const sortField = params.sort || 'createdAt'; // Change to your default sorting field
    const sortOrder = params.order && params.order.toLowerCase() === 'desc' ? -1 : 1;
    const skip = (page - 1) * limit;
    
    // if (qry.name) {
    //   qry.$or.push({ name: { $regex: new RegExp(qry.name, 'i') } });
    // }

    // if (qry.name) {
    //   qry.$or.push({ orderNumber: { $regex: new RegExp(qry.name, 'i') } });
    // }

    let modelRes;
    switch (type) {
      case 'digitizing':
        modelRes = await this.digitizingQuote.find(query).sort({ [sortField]: sortOrder }).skip(skip).limit(limit);
        break;
      case 'vector':
        modelRes = await this.vectorQuote.find(query).sort({ [sortField]: sortOrder }).skip(skip).limit(limit);
        break;

      case 'patch':
        modelRes = await this.patchQuote.find(query).sort({ [sortField]: sortOrder }).skip(skip).limit(limit);
        break;
    }
    const totalCount = await this.getTotalCount(type, query);

    return {
      results: modelRes,
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
      limit,
      sortOrder: sortOrder === 1 ? 'asc' : 'desc',
      sortField,
    };
  }


  async handleOrderModelUpdate(type: string, id: any, updateOrderDto: any) {

    let modelRes;
    switch (type) {
      case 'digitizing':
        modelRes = await this.digitizingQuote.findByIdAndUpdate(id, updateOrderDto);
        break;
      case 'vector':
        modelRes = await this.vectorQuote.findByIdAndUpdate(id, updateOrderDto);
        break;

      case 'patch':
        modelRes = await this.patchQuote.findByIdAndUpdate(id, updateOrderDto);
        break;
    }
    return modelRes;
  }

  async getTotalCount(type: string, query: any): Promise<number> {
    let count;
  
    switch (type) {
      case 'digitizing':
        count = await this.digitizingQuote.countDocuments(query);
        break;
      case 'vector':
        count = await this.vectorQuote.countDocuments(query);
        break;
      case 'patch':
        count = await this.patchQuote.countDocuments(query);
        break;
    }
  
    return count;
  }

}
