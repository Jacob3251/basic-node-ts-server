import { Schema, model } from "mongoose";
import { ITeacher } from "./teacher.interface";

const teacherSchema = new Schema<ITeacher>({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  dateOfBirth: { type: String, required: true },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  designation: {
    type: String,
    required: true,
    enum: [
      "professor",
      "assistant professor",
      "associate professor",
      "senior lecturer",
      "lecturer",
      "adjunct faculty",
    ],
  },
});

const Teacher = model<ITeacher>("Teacher", teacherSchema);

export default Teacher;
