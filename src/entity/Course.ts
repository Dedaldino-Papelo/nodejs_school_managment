import { Entity, Column, PrimaryGeneratedColumn,OneToMany, ManyToMany, JoinTable} from "typeorm"
import { Class } from "./Class"
import { Subject } from "./Subject"

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        length: 100
    })
    name: string

    @OneToMany(() => Class, classe => classe.course)
    classes: Class[]

    @ManyToMany(() => Subject, (subject) => subject.courses)
    @JoinTable()
    subjects: Subject[]
}