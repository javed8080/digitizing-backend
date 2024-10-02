import { ApiProperty } from "@nestjs/swagger";
import { IsString,IsArray ,IsNotEmpty, IsDate, IsNumber, IsOptional, IsEnum, IsEmail } from "class-validator";
import { OrderStatus, OrderType } from "src/enums/order-type";
import { PaymentStatus } from "src/enums/status";

export class CreateVectorQuoteDto{
  
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
    type: string;


    @ApiProperty()
    @IsOptional()
    @IsString()
    quoteType: OrderType.vector;

    
    @ApiProperty()
    @IsOptional()
    @IsString()
    orderState:OrderStatus;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    po:string;

    @ApiProperty()
    @IsNotEmpty()
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

    @ApiProperty()
    @IsOptional()
    @IsString()
    colors:string;


    @ApiProperty()
    @IsOptional()
    @IsString()
    format:string;

    @ApiProperty()
    @IsOptional()
    // @IsString()
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
    clr_sep:string;    //Color Separation in vector

    @ApiProperty()
    @IsOptional()
    @IsString()
    issuee:string;    
    
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
    qc: string


    @ApiProperty()
    @IsOptional()
    quote: any
}
