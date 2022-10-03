import { AppDataSource } from "../data-source";
import { Class } from "../entity/Class";

export const classRepository = AppDataSource.getRepository(Class)