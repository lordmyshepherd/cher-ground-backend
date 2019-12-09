import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, PrimaryColumn } from "typeorm";

import { RetailerDetailVO } from "./RetailerDetailVO";

@Entity("retailer_phone_number")
export class RetailerPhoneNumberVO {

    @PrimaryGeneratedColumn()
    id: number;

    // @OneToOne(type => RetailerDetailVO, retailerDetailVO => retailerDetailVO.phoneNumber)
    // retailerDetail: RetailerDetailVO;

    @Column()
    office: string;

    @Column()
    ceo: string;
}