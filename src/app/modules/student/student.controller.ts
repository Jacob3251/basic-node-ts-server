import { NextFunction, Request, Response } from "express";
import {
  addStudentToDb,
  getAllStudentsFromDb,
  getSingleStudentFromDb,
} from "./student.service";

export const addToDbController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const student = await addStudentToDb(data);
  res.status(200).json({
    status: "Success",
    data: student,
  });
};

export const getAllStudentFromDbController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const students = await getAllStudentsFromDb();
  res.status(200).json({
    status: "Success",
    data: students,
  });
};

export const getSingleStudentFromDbController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const student = await getSingleStudentFromDb(id);
  res.status(200).json({
    status: "Success",
    data: student,
  });
};
