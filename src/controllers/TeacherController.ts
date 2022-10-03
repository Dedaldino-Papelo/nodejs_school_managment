import { Request, Response } from "express";
import { teacherRepository } from "../Repositories/TeacherRepository";

export class TeacherController{
    async create(req:Request, res: Response){
        const {name,morada,telefone} = req.body

        if(!name || !morada || !telefone){
            return res.send({message: "Please fill all the blanks"})
        }

        try {
            const newTeacher = teacherRepository.create({
                name,
                morada,
                telefone
            })

            await teacherRepository.save(newTeacher)
            
            return res.status(200).send(newTeacher)

        } catch (error) {
            console.log(error)
            return res.status(400).send({message: 'Unable to create Teacher'})
        }
    }
}