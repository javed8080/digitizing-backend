import { PartialType } from '@nestjs/swagger';
import { CreateDigitizingOrderDto } from './digitizing-order.dto';

export class UpdateOrderDto extends PartialType(CreateDigitizingOrderDto) {}
