import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, PrimaryColumn } from "typeorm";

import { RetailerDetailVO } from "./RetailerDetailVO";

@Entity("retailer_email")
export class RetailerEmailVO {

    @PrimaryGeneratedColumn()
    id: number;

    // @OneToOne(type => RetailerDetailVO, retailerDetailVO => retailerDetailVO.email)
    // retailerDetail: RetailerDetailVO;

    @Column()
    order: string;

    @Column()
    ceo: string;

}