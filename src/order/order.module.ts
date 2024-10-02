import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DigitizingOrder, DigitizingOrderSchema } from './entities/digitizing-order.entity';
import { VectorOrder, VectorOrderSchema } from './entities/vector-order.entity';
import { PatchOrder, PatchOrderSchema } from './entities/patch-order.entity';

@Module({

  imports: [
    MongooseModule.forFeature([
      { name: DigitizingOrder.name, schema: DigitizingOrderSchema },
      { name: VectorOrder.name, schema: VectorOrderSchema },
      { name: PatchOrder.name, schema: PatchOrderSchema },
    ]),


  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [MongooseModule]
})
export class OrderModule { }
