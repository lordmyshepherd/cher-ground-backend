import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne, OneToOne } from "typeorm";

import { OrderFormatItemVO }  from "./OrderFormatItemVO";
import { RetailerDetailVO } from "./RetailerDetailVO";

//import { RetailerDetail } from "domain/entity";

@Entity("order_format")
export class OrderFormatVO {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => OrderFormatItemVO, orderFormatItemVO => orderFormatItemVO.format)
    formatItems: OrderFormatItemVO[];
}