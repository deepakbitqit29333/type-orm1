import {BaseEntity, Column, PrimaryColumn, ManyToOne, Entity} from 'typeorm';
import {User} from "./User";
@Entity('photos')
export class Photo extends BaseEntity{
    @PrimaryColumn()
    id:number
    @Column()
    url:string
    @ManyToOne(()=>User,(user)=>user.photos)
    user:User;
}