import { IStudent } from "./student.interface";
import Student from "./student.model";
export const addStudentToDb = async (payload: IStudent): Promise<IStudent> => {
  const student = await new Student(payload);
  await student.save();
  return student;
};

export const getAllStudentsFromDb = async (): Promise<IStudent[]> => {
  const students = await Student.find();
  return students;
};

export const getSingleStudentFromDb = async (
  payload: string
): Promise<IStudent | null> => {
  const student = await Student.findOne({
    id: payload,
  });
  return student;
};
