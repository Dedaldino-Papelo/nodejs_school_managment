import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { Course } from "./Course"
import { Student } from "./Students"

@Entity('classes')
export class Class {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    room: number

    @ManyToOne(() => Course, (course) => course.classes)
    course: Course

    @OneToMany(() => Student, (student) => student.class)
    students: Student[]
}