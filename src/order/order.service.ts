import { Injectable } from '@nestjs/common';
import { CreateDigitizingOrderDto } from './dto/digitizing-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { DigitizingOrder } from './entities/digitizing-order.entity';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { VectorOrder } from './entities/vector-order.entity';
import { PatchOrder } from './entities/patch-order.entity';

@Injectable()
export class OrderService {

  constructor(
    @InjectModel(DigitizingOrder.name) private digitizingOrder: Model<DigitizingOrder>,
    @InjectModel(VectorOrder.name) private vectorOrder: Model<VectorOrder>,
    @InjectModel(PatchOrder.name) private patchOrder: Model<PatchOrder>
  ) { }

  async create(createOrderDto: any) {
    try {
      const data = await this.handleOrderModelStore(createOrderDto.type, createOrderDto);
      return data;
    } catch (error) {
      return error;
    }
  }


  async findAll(type:string) {
    const data =  await this.findByAllType(type, {});
    return data;
  }

  async findOne(id: any,type:string) {
    // return `This action returns a #${id} order`;
    const data =  await this.findByOneType(type, id);
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
      const data = await this.digitizingOrder.findByIdAndDelete(id);
      return data;
    } catch (error) {
      return error;
    }
  }


  async handleOrderModelStore(type: string, createOrderDto: any) {

    let modelRes;
    switch (type) {
      case 'digitizing':
        modelRes = await this.digitizingOrder.create(createOrderDto);
        break;
      case 'vector':
        modelRes = await this.vectorOrder.create(createOrderDto);
        break;

      case 'patch':
        modelRes = await this.patchOrder.create(createOrderDto);
        break;
    }
    return modelRes;
  }


  async findByOneType(type: string, id: any) {

    let modelRes;
    switch (type) {
      case 'digitizing':
        modelRes = await this.digitizingOrder.findOne(id);
        break;
      case 'vector':
        modelRes = await this.vectorOrder.findOne(id);
        break;

      case 'patch':
        modelRes = await this.patchOrder.findOne(id);
        break;
    }
    return modelRes;
  }


  async findByAllType(type: string, qry: any) {

    let modelRes;
    switch (type) {
      case 'digitizing':
        modelRes = await this.digitizingOrder.find(qry);
        break;
      case 'vector':
        modelRes = await this.vectorOrder.find(qry);
        break;

      case 'patch':
        modelRes = await this.patchOrder.find(qry);
        break;
    }
    return modelRes;
  }


  async handleOrderModelUpdate(type: string, id: any, updateOrderDto: any) {

    let modelRes;
    switch (type) {
      case 'digitizing':
        console.log(updateOrderDto, 'updateOrderDto');
        modelRes = await this.digitizingOrder.findByIdAndUpdate(id, updateOrderDto);
        break;
      case 'vector':
        modelRes = await this.vectorOrder.findByIdAndUpdate(id, updateOrderDto);
        break;

      case 'patch':
        modelRes = await this.patchOrder.findByIdAndUpdate(id, updateOrderDto);
        break;
    }
    return modelRes;
  }

}
