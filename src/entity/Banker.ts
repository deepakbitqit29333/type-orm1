import {Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinColumn, JoinTable} from 'typeorm';
import {Person} from "./util/Person";
import {Client} from "./client";
@Entity('banker')
export class Banker extends Person{

    @Column({unique:true, length:10})
    employee_number:string;
    @ManyToMany(
        ()=>Client,
    )
    @JoinTable({
        name:'bankers_clients',
        joinColumn:{
            name:"banker",
            referencedColumnName:'id'
        },
        inverseJoinColumn:{
            name:'client',
            referencedColumnName: 'id'
        }
    })
    clients:Client[];
    @CreateDateColumn()
    created_at:Date;
    @UpdateDateColumn()
    updated_at:Date
}