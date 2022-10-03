import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Student } from "./Students";
import { Subject } from "./Subject";

@Entity('notas')
export class Nota {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    nota1: number;

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    nota2: number

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    exame: number

    @Column({type: "decimal", precision: 10, scale: 2, nullable: true, default: 0})
    notafinal: number

   @ManyToOne(() => Subject, (subject) => subject.notas)
   subject: Subject

   @ManyToOne(() => Student, (student) => student.notas)
   student: Student
}