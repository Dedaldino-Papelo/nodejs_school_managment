import { Request, Response } from "express";
import { courseRepository } from "../Repositories/CourseRepository";

export class CourseController{
    async create(req:Request, res: Response){
        const {name} = req.body

        if(!name){
            return res.send({message: "Please enter a name"})
        }

        try {
            const newCourse = courseRepository.create({
                name
            })

            await courseRepository.save(newCourse)
            
            return res.status(200).send(newCourse)

        } catch (error) {
            console.log(error)
            return res.status(400).send({message: 'Unable to create Course'})
        }
    }
}