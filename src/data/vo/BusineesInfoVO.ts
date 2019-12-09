import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, PrimaryColumn } from "typeorm";

import { RetailerDetailVO } from "./RetailerDetailVO";

@Entity("Business_info")
export class BusinessInfoVO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    registerName: string;

    @Column()
    registerNumber: number;

}