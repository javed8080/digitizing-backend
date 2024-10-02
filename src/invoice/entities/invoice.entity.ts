
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { OrderStatus, OrderType } from "src/enums/order-type";
import { PaymentStatus, Status } from "src/enums/status";
import { generateUniqueInteger } from "src/utils/unique-id-generator";

@Schema({ versionKey: false ,collection: 'invoice'}) // Set versionKey to false to exclude __v field
export class Invoice extends Document {
    @Prop({ default: generateUniqueInteger })
    _id: number;

    @Prop({default: null})
    invoiceID: string;

    @Prop({default: 0})
    gpricee: Number;

    @Prop({default: 0})
    advancee: Number;

    @Prop({default: 0})
    netgp: Number;

    @Prop({default: null})
    userID : Number;

    @Prop({default: null})
    onumber: string;

    @Prop({default: null})
    designName:string;


    @Prop({default: 0})
    pricee:Number;

    @Prop({default: 0})
    discount:Number;

    @Prop({default: 0})
    total:Number;

    @Prop({default: null})
    invoice_date:string;

    @Prop({default: null})
    invDate:string;

    @Prop({default: null})
    status:PaymentStatus;

    @Prop({default: null})
    paid_date:string;

    @Prop({default: null})
    paid_by:string;

    @Prop({default: null})
    created_at: String
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);

