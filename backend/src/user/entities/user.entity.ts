// import { Column, Entity, PrimaryColumn } from "typeorm";

// @Entity()
// export class Sec_user {
//     @PrimaryColumn()
//     user_id:number

//     @Column()
//     client_id:string

//     @Column()
//     username :string

//     @Column()
//     password :string

//     @Column()
//     rec_status :boolean

//     @Column()
//     lastLogin :Date

// }

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sec_user' })
export class Sec_user {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ length: 50 })
  client_id: string;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 50 })
  password: string;

  @Column()
  rec_status: boolean;

  @Column({ nullable: true, type: 'timestamp' })
  lastlogin?: Date;
}



