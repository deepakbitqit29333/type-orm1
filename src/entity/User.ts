import {Entity, PrimaryColumn, Column, BaseEntity, OneToOne, JoinColumn, ManyToOne, OneToMany} from 'typeorm';
import {Profile} from "./Profile";
import {Photo} from "./Photo";
@Entity('users')
export class User extends BaseEntity{
    @PrimaryColumn()
    id:number
    @Column({nullable:true,name:'username'})
    name:string
    @OneToOne(()=>Profile,profile=>profile.user)
    profile:Profile
    @OneToMany(()=>Photo,(photo)=>photo.user)
    photos:Photo[]
}