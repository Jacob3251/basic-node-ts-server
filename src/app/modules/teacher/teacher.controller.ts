import { NextFunction, Request, Response } from "express";
import { addTeacherToDb, getAllTeachersFromDb } from "./teacher.service";

export const addTeacherToDbController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const teacher = await addTeacherToDb(data);
  res.status(200).json({
    status: "Success",
    data: teacher,
  });
};

export const getAllTeacherController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const teachers = await getAllTeachersFromDb();
  res.status(200).json({
    status: "Success",
    data: teachers,
  });
};
