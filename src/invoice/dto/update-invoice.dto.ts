import { ApiProperty , PartialType } from "@nestjs/swagger";
import { IsString, IsDate, IsNotEmpty,IsNumber, IsOptional, IsEnum, IsEmail, IsObject, IsArray } from "class-validator";
import { PaymentStatus } from "src/enums/status";
import { CreateInvoiceDto } from './create-invoice.dto';

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {


    @IsOptional()
    @IsString()
    invoiceID: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    gpricee: Number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    advancee: Number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    netgp: Number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    userID : Number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    onumber: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    designName:string;


    @ApiProperty()
    @IsOptional()
    @IsNumber()
    pricee:Number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    discount:Number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    total:Number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    invoice_date:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    invDate:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    status:PaymentStatus;

    @ApiProperty()
    @IsOptional()
    @IsString()
    paid_date:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    paid_by:string;

}
