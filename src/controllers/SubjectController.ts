import { Request, Response } from "express";
import { subjectRepository } from "../Repositories/SubjectRepository";

export class SubjectController{
    async create(req:Request, res: Response){
        const {name} = req.body

        if(!name){
            return res.send({message: "Please enter a name"})
        }

        try {
            const newSubject = subjectRepository.create ({
                name
            })

            await subjectRepository.save(newSubject)
            
            return res.status(200).send(newSubject)

        } catch (error) {
            console.log(error)
            return res.status(400).send({message: 'Unable to create Subject'})
        }
    }
}