import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/enums/role";
import { Status } from "src/enums/status";

export class CreateCustomerProfileDto {
    @ApiProperty()
    company_name: string

    @ApiProperty()
    company_type: string

    @ApiProperty()
    phone: string

    @ApiProperty()
    cell: string

    @ApiProperty()
    fax: string

    @ApiProperty()
    email1: string

    @ApiProperty()
    email2: string

    @ApiProperty()
    email3: string

    @ApiProperty()
    email4: string

    @ApiProperty()
    address: string

    @ApiProperty()
    city: string

    @ApiProperty()
    state: string

    @ApiProperty()
    zipcode: string

    @ApiProperty()
    country: string

    @ApiProperty()
    reffence: string

    @ApiProperty()
    sales_reffence: string

    @ApiProperty()
    web_url: string

    @ApiProperty()
    ip_address: string

    @ApiProperty()
    profile_pic: string

    @ApiProperty()
    formats = Array

    @ApiProperty()
    payment_terms: string

    @ApiProperty()
    payment_type_name: string

    @ApiProperty()
    total_paid_amount: number

    @ApiProperty()
    total_unpaid_amount: number

    @ApiProperty()
    last_paid_date: Date

    @ApiProperty()
    last_invoice_date: Date

    @ApiProperty()
    ccname: string

    @ApiProperty()
    cctype: string

    @ApiProperty()
    ccnumber: string

    @ApiProperty()
    ccmonth: string

    @ApiProperty()
    ccyear: string

    @ApiProperty()
    ccverification: string

    @ApiProperty()
    ccaddress: string

    @ApiProperty()
    ccity: string

    @ApiProperty()
    ccstate: string

    @ApiProperty()
    cczip: string

    @ApiProperty()
    cccountry: string

    @ApiProperty()
    standard_price: string

    @ApiProperty()
    note_for_digitizer: string

    @ApiProperty()
    note_for_vector: string

    @ApiProperty()
    note_for_acc: string

    @ApiProperty()
    shipaddress: string

}
