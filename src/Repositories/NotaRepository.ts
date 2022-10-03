import { AppDataSource } from "../data-source";
import { Nota } from "../entity/Nota";

export const notaRepository = AppDataSource.getRepository(Nota)