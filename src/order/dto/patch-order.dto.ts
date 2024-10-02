import { ApiProperty } from "@nestjs/swagger";
import { IsString,IsArray ,IsNotEmpty, IsDate, IsNumber, IsOptional, IsEnum, IsEmail } from "class-validator";
import { OrderStatus, OrderType } from "src/enums/order-type";
import { PaymentStatus } from "src/enums/status";
import { CommonOrderDto } from "./common-order.dto";

export class CreatePatchOrderDto{


    @ApiProperty()
    @IsOptional()
    @IsString()
    orderId: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    userId: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    customerID: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    orderNumber: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    type: OrderType.patch;

    @ApiProperty()
    @IsOptional()
    @IsString()
    orderState:OrderStatus;

    @ApiProperty()
    @IsOptional()
    @IsString()
    po:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    name:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    date:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    time:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    sendDateTime:string;

    // width

    @ApiProperty()
    @IsOptional()
    @IsString()
    width:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    widtha:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    height:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    heighta:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    colors:string;


    // @Prop({default: null})
    // format:string;


    // @Prop({default: null})
    // fabric:string;


    // @Prop({default: null})
    // placement:string;


    @ApiProperty()
    @IsOptional()
    @IsString()
    urgent:string;


    @ApiProperty()
    @IsOptional()
    @IsString()
    instruction:string; //Instruction from Client for order

    @ApiProperty()
    @IsOptional()
    @IsString()
    adminInstruction:string; //Instruction from Admin

    @ApiProperty()
    @IsOptional()
    @IsString()
    adminInstructionToDigitizer:string; //adinst

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    price:Number;  

    @ApiProperty()
    @IsOptional()
    @IsEmail()
    email1:string;

    @ApiProperty()
    @IsOptional()
    @IsEmail()
    email2:string;

    @ApiProperty()
    @IsOptional()
    @IsEmail()
    email3:string;

    @ApiProperty()
    @IsOptional()
    @IsEmail()
    email4:string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    bonus:Number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    invoiceid:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    invoiceNumber:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    paymentStatus:PaymentStatus;

    @ApiProperty()
    @IsOptional()
    @IsString()
    paidDate:Date;

    @ApiProperty()
    @IsOptional()
    @IsString()
    status:OrderStatus;

    @ApiProperty()
    @IsOptional()
    @IsString()
    stitches_a:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    edit:string;


    @ApiProperty()
    @IsOptional()
    @IsString()
    editdate:Date;

    @ApiProperty()
    @IsOptional()
    @IsString()
    editnumber:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    convert:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    convertdDate:Date;

    @ApiProperty()
    @IsOptional()
    @IsString()
    convertNumber:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    assign:string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    digitizeRate:number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    qcrate:number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    salesRef:string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    salesCommission:number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    salesFirstCommission:number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    releasedby:string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    releaseCommission:number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    clr_sep:string;    
    
    @ApiProperty()
    @IsOptional()
    @IsArray()
    revisions: []

    @ApiProperty()
    @IsOptional()
    @IsString()
    ipaddress: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    patchType: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    qty: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    backing: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    merrowBorder: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    color: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    shippingAddress: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    deliveryDate: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    pprice: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    psew: string //Client needs pricing + sew out sample

    @ApiProperty()
    @IsOptional()
    @IsString()
    ostatus: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    patchProductionDate: Date

    @ApiProperty()
    @IsOptional()
    @IsString()
    patchDispatchedDate: Date

    @ApiProperty()
    @IsOptional()
    @IsString()
    patchDeliveredDate: Date
    
    @ApiProperty()
    @IsOptional()
    @IsString()
    qc: string


    @ApiProperty()
    @IsOptional()
    quote: any

    
}
