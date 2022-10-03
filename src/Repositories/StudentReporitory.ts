import { AppDataSource } from "../data-source";
import { Student } from "../entity/Students";

export const studentRepository = AppDataSource.getRepository(Student)