import {BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';
import {User} from "./User";
export  enum Gender{
    male='male',
    female='female',
    other='other'
}
@Entity('profile')
export class Profile extends BaseEntity{
    @PrimaryColumn()
    id:number
    @Column({
        type:"enum",enum:Gender
    })
    gender:string
    @Column()
    photo:string;
    @OneToOne(()=>User,
            user=>user.profile
        )
    @JoinColumn({name:'uId'})
    user:User
}