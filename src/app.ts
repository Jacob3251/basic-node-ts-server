import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import studentRouter from "./app/modules/student/student.route";
import teacherRouter from "./app/modules/teacher/teacher.route";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", studentRouter);
app.use("/", teacherRouter);
export default app;
