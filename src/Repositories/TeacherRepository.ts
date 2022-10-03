import { AppDataSource } from "../data-source";
import { Teacher } from "../entity/Teacher";

export const teacherRepository = AppDataSource.getRepository(Teacher)