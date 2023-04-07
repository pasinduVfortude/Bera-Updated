import {Column, Entity, PrimaryColumn} from "typeorm"

@Entity()
export class Filedetail {
    @PrimaryColumn()
    user_id:number

    @Column()
    facility_id :string

    @Column({unique:true})
    department_id :number

    @Column({nullable:true})
    function_id :number

    @Column({nullable:true})
    rec_status :boolean

}
