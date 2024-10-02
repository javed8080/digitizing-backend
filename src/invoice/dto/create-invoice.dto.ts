import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDate, IsNotEmpty,IsNumber, IsOptional, IsEnum, IsEmail, IsObject, IsArray } from "class-validator";
import { PaymentStatus } from "src/enums/status";


export class InvoiceList{

    @IsOptional()
    order_id

    @IsOptional()
    @IsArray()
    children:[]
}

export class CreateInvoiceDto {

    // @ApiProperty()
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

    @ApiProperty()
    @IsArray()
    @IsOptional()
    orders:[];

    // [{"order_id":1 , "children":[1,2,3,4]}]
    

}
