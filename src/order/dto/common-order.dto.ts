import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDate, IsNumber, IsOptional, IsEnum, IsEmail } from "class-validator";
import { OrderStatus, OrderType } from "src/enums/order-type";
import { PaymentStatus } from "src/enums/status";

export class CommonOrderDto {
  @IsString()
  @ApiProperty()
  type: string;
}
