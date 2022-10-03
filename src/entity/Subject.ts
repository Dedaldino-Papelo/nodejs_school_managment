import { Entity, Column, PrimaryGeneratedColumn, OneToMany,ManyToMany } from "typeorm"
import { Course } from "./Course"
import { Nota } from "./Nota"
import { Teacher } from "./Teacher"

@Entity('subjects')
export class Subject {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        length: 100
    })
    name: string

    @OneToMany(() => Nota, (nota) => nota.subject)
    notas: Nota[]

    @ManyToMany(() => Teacher, (teacher) => teacher.subjects)
    teachers: Teacher[]

    @ManyToMany(() => Course, (course) => course.subjects)
    courses: Course[]
}