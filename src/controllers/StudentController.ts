import { Request, Response } from "express";
import { classRepository } from "../Repositories/ClassRepository";
import { studentRepository } from "../Repositories/StudentReporitory";

export class StudentCotroller {
    async create(req: Request<{idClass: number}>, res: Response){
        const {name, age, morada, telefone} = req.body
        const {idClass} = req.params


        if(!name || !age || !morada || !telefone){
            return res.send({message: "All fields are required"})
        }

        try {
            
            const classId = await classRepository.findOneBy({id: idClass})

            if(!classId){
                return res.send({message: 'Class Not found'})
            }

            const newStudent = studentRepository.create({
                name,
                age,
                morada,
                telefone,
                class: classId
            })
           await studentRepository.save(newStudent)
            
            return res.status(200).send(newStudent)

        } catch (error) {
            console.log(error)
            return res.send({message: 'Internal Server Error'})
        }
    }
}