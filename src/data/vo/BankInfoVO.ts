import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, CreateDateColumn,  UpdateDateColumn} from "typeorm";
import { RetailerDetailVO } from  "./RetailerDetailVO"

@Entity("bank_info")
export class BankInfoVO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bank: string;

    @Column()
    accountNumber: string;

    @Column()
    owner: string;

    @Column()
    type: string;

    @Column()
    briefs: string;

    @Column()
    isActive: number;

    @CreateDateColumn()
    createdAt: number;

    @UpdateDateColumn()
    updatedAt: number;

}