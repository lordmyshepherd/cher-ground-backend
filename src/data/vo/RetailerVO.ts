import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, PrimaryColumn } from "typeorm";

import { RetailerDetailVO } from "./RetailerDetailVO";

@Entity("retailer")
export class RetailerVO {

    @PrimaryColumn({ type: "varchar" })
    id: string;

    @Column()
    name: string;

    @OneToOne(type => RetailerDetailVO, {cascade: true})
    @JoinColumn()
    detail: RetailerDetailVO;
    
    //ManyToMany 추가 (Wholesaler)

}