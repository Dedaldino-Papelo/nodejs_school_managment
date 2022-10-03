import { Router } from "express";
import { ClassController } from "./controllers/ClassController";
import { CourseController } from "./controllers/CourseController";
import { StudentCotroller } from "./controllers/StudentController";
import { SubjectController } from "./controllers/SubjectController";
import { TeacherController } from "./controllers/TeacherController";

const router = Router()

//Courses
const courseController = new CourseController
const subjectController = new SubjectController
const teacherRepository = new TeacherController
const classRepository = new ClassController
const studentCotroller = new StudentCotroller

router.post("/course", courseController.create)
router.post("/subject", subjectController.create)
router.post("/teacher", teacherRepository.create)
router.post("/class/:idCourse/create", classRepository.create)
router.post("/student/:idClass/create", studentCotroller.create)

export default router