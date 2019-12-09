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

    @OneToOne(type => OrderFormatVO, {cascade: true})
    @JoinColumn()
    format: OrderFormatVO;

    @OneToOne(type => RetailerAddressVO, {cascade: true})
    @JoinColumn()
    address: RetailerAddressVO;

    @OneToOne(type => RetailerPhoneNumberVO, {cascade: true})
    @JoinColumn()
    phoneNumber: RetailerPhoneNumberVO; 

    @OneToOne(type => RetailerEmailVO, {cascade: true})
    @JoinColumn()
    email: RetailerEmailVO; 

    @OneToOne(type => BusinessInfoVO, {cascade: true})
    @JoinColumn()
    businessInfo: BusinessInfoVO;

    @OneToOne(type => BankInfoVO, {cascade: true})
    @JoinColumn()
    bankInfo: BankInfoVO;

    @Column()
    ceoName: string; 
}