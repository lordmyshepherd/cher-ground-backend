import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("building")
export class VOBuilding {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    displayName: string;

    @Column()
    fullName: string;

    @Column()
    simpleName: string;

    // todo : create createdAt, updatedAt
}