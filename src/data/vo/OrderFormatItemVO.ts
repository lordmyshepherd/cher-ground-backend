import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { OrderFormatVO } from "./OrderFormatVO";

@Entity("order_format_item")
export class OrderFormatItemVO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    ordinal: number;    

    @ManyToOne(type => OrderFormatVO, orderformatVO => orderformatVO.formatItems)
    format: OrderFormatVO;
    
}