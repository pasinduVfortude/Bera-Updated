import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Files {
    @PrimaryGeneratedColumn()
    file_id:number

    @Column()
    file_name:string

    @Column({unique:true})
    department_id:number

    @Column({nullable:false})
    file_path:string

    @Column({nullable:false})
    uploaded_by:number

    @Column({nullable:true})
    uploaded_dt:string

    @Column({nullable:false})
    rec_status:boolean

}
