import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm"
import { Subject } from "./Subject"

@Entity('teachers')
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({
        nullable: true
    })
    morada: string

    @Column({
        type: 'varchar',
        length: 15
    })
    telefone: string

    @ManyToMany(() => Subject, (subject) => subject.teachers)
    @JoinTable()
    subjects: Subject[]
}