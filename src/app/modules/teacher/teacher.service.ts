import { ITeacher } from "./teacher.interface";
import Teacher from "./teacher.model";
export const addTeacherToDb = async (paylaod: ITeacher): Promise<ITeacher> => {
  const teacher = await new Teacher(paylaod);
  await teacher.save();
  return teacher;
};

export const getAllTeachersFromDb = async (): Promise<ITeacher[]> => {
  const teachers = await Teacher.find();
  return teachers;
};
