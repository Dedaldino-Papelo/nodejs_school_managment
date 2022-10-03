import { AppDataSource } from "../data-source";
import { Subject } from "../entity/Subject";

export const subjectRepository = AppDataSource.getRepository(Subject)