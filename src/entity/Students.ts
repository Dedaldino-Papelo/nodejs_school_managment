import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { Class } from "./Class"
import { Course } from "./Course"
import { Nota } from "./Nota"

@Entity('students')
export class Student {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column('int')
    age: number

    @Column({
        nullable: true
    })
    morada: string

    @Column({
        type: 'varchar',
        length: 15
    })
    telefone: string

    @ManyToOne(() => Class, (classes) => classes.students)
    class: Class 

    @OneToMany(() => Nota, (nota) => nota.student)
    notas: Nota[]
}