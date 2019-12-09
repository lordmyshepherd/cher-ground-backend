import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, PrimaryColumn } from "typeorm";

import { RetailerDetailVO } from "./RetailerDetailVO";

@Entity("retailer_address")
export class RetailerAddressVO {

    @PrimaryColumn({ type: "varchar" })
    id: string;

    // @OneToOne(type => RetailerDetailVO, retailerDetailVO => retailerDetailVO.address)
    // retailerDetail: RetailerDetailVO;

    @Column()
    office: string;

    @Column()
    warehouse: string;

}