import { AppDataSource } from "../data-source";
import { Course } from "../entity/Course";

export const courseRepository = AppDataSource.getRepository(Course)