import { Request, Response } from "express";
import { classRepository } from "../Repositories/ClassRepository";
import { courseRepository } from "../Repositories/CourseRepository";

export class ClassController{
    async create(req:Request<{idCourse:number}>, res: Response){
        const {name, room} = req.body
        const {idCourse} = req.params

        if(!name || !room){
            return res.send({message: "All fields are Required"})
        }

        try {

            const course = await courseRepository.findOneBy({id: idCourse})
            
            if(!course){
                return res.status(404).send({message: 'Course not found'})
            }

            const newClass = classRepository.create({
                name,
                room,
                course
            })

            await classRepository.save(newClass)
            
            return res.status(200).send(newClass)

        } catch (error) {
            console.log(error)
            return res.status(400).send({message: 'Unable to create Class'})
        }
    }
}