import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";

import { OrderFormatVO } from "./OrderFormatVO";
import { RetailerAddressVO } from "./RetailerAddressVO";
import { RetailerVO} from "./RetailerVO";
import { RetailerPhoneNumberVO} from "./RetailerPhoneNumberVO"
import { RetailerEmailVO } from "./RetailerEmailVO"
import { BusinessInfoVO } from "./BusineesInfoVO"
import { BankInfoVO } from "./BankInfoVO"

@Entity("retailer_detail")
export class RetailerDetailVO {

    @PrimaryGeneratedColumn()
    id: number;

    //retailer(one) : 관계소유자
    // @OneToOne(type => RetailerVO, retailerVO => retailerVO.detail)
    // retailer: RetailerVO;

    @OneToOne(type => OrderFormatVO)
    @JoinColumn()
    format: OrderFormatVO;

    @OneToOne(type => RetailerAddressVO)
    @JoinColumn()
    address: RetailerAddressVO;

    @OneToOne(type => RetailerPhoneNumberVO)
    @JoinColumn()
    phoneNumber: RetailerPhoneNumberVO; 

    @OneToOne(type => RetailerEmailVO)
    @JoinColumn()
    email: RetailerEmailVO; 

    @OneToOne(type => BusinessInfoVO)
    @JoinColumn()
    businessInfo: BusinessInfoVO;

    @OneToOne(type => BankInfoVO)
    @JoinColumn()
    bankInfo: BankInfoVO;

    @Column()
    ceoName: string; 
}