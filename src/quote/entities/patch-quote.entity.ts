import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { OrderStatus, OrderType } from "src/enums/order-type";
import { PaymentStatus } from "src/enums/status";
import {currentTime, generateUniqueInteger } from "src/utils/unique-id-generator";

@Schema({ versionKey: false ,collection: 'quote'}) // Set versionKey to false to exclude __v field
export class PatchQuote extends Document {

    @Prop({ default: generateUniqueInteger })
    _id: number;

    @Prop({default: null})
    orderId: string;

    @Prop({default: null})
    userId: string;

    @Prop({default: null})
    customerID: string;

    @Prop({default: null})
    orderNumber: string;

    @Prop({default: null})
    type: string;

    @Prop({default: null})
    quoteType: OrderType.patch;

    @Prop({default: null})
    orderState:OrderStatus;

    @Prop({default: null})
    po:string;

    @Prop({default: null})
    name:string;

    @Prop({default: null})
    date:string;

    @Prop({default: null})
    time:string;

    @Prop({default: null})
    sendDateTime:string;

    // width

    @Prop({default: null})
    width:string;

    @Prop({default: null})
    widtha:string;

    @Prop({default: null})
    height:string;

    @Prop({default: null})
    heighta:string;

    @Prop({default: null})
    colors:string;


    // @Prop({default: null})
    // format:string;


    @Prop({default: null})
    fabric:string;


    @Prop({default: null})
    placement:string;


    @Prop({default: null})
    urgent:string;


    @Prop({default: null})
    instruction:string; //Instruction from Client for order

    @Prop({default: null})
    adminInstruction:string; //Instruction from Admin

    @Prop({default: null})
    adminInstructionToDigitizer:string; //adinst

    @Prop({default: 0})
    price:Number;  

    @Prop({default: null})
    email1:string;

    @Prop({default: null})
    email2:string;

    @Prop({default: null})
    email3:string;

    @Prop({default: null})
    email4:string;

    @Prop({default: null})
    bonus:Number;

    @Prop({default: null})
    invoiceid:string;

    @Prop({default: null})
    invoiceNumber:string;

    @Prop({default: null})
    paymentStatus:PaymentStatus;

    @Prop({default: null})
    paidDate:Date;

    @Prop({default: null})
    status:OrderStatus;

    @Prop({default: null})
    stitches_a:string;

    @Prop({default: null})
    edit:string;


    @Prop({default: null})
    editdate:Date;

    @Prop({default: null})
    editnumber:string;

    @Prop({default: null})
    convert:string;

    @Prop({default: null})
    convertdDate:Date;

    @Prop({default: null})
    convertNumber:string;

    @Prop({default: null})
    assign:string;

    @Prop({default: null})
    digitizeRate:number;

    @Prop({default: null})
    qcrate:number;

    @Prop({default: null})
    salesRef:string;

    @Prop({default: null})
    salesCommission:number;

    @Prop({default: null})
    salesFirstCommission:number;

    @Prop({default: null})
    releasedby:string;

    @Prop({default: null})
    releaseCommission:number;

    @Prop({default: null})
    clr_sep:string;    
    
    @Prop({default: null})
    revisions: PatchQuote[]

    @Prop({default: null})
    ipaddress: string

    @Prop({default: null})
    patchType: string

    @Prop({default: null})
    qty: string

    @Prop({default: null})
    backing: string

    @Prop({default: null})
    merrowBorder: string

    @Prop({default: null})
    color: string

    @Prop({default: null})
    shippingAddress: string

    @Prop({default: null})
    deliveryDate: string

    @Prop({default: null})
    pprice: string

    @Prop({default: null})
    psew: string //Client needs pricing + sew out sample

    @Prop({default: null})
    ostatus: string

    @Prop({default: null})
    patchProductionDate: Date

    @Prop({default: null})
    patchDispatchedDate: Date

    @Prop({default: null})
    patchDeliveredDate: Date
    
    @Prop({default: null})
    qc: string

    @Prop({default: currentTime()})
    createdAt: string

    @Prop({default: null})
    updatedAt: string

}

export const PatchQuoteSchema = SchemaFactory.createForClass(PatchQuote);

