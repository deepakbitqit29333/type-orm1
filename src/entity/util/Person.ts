import {Entity,BaseEntity,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm';
@Entity()
export class Person extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    firstname:string;
    @Column()
    middle_name:string;
    @Column({unique:true})
    email:string;
    @Column({unique:true,length:10})
    card_number:string;


}