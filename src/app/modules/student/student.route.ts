import express from "express";
import {
  addToDbController,
  getAllStudentFromDbController,
  getSingleStudentFromDbController,
} from "./student.controller";

const router = express.Router();
router.get("/student", getAllStudentFromDbController);
// getting individual students via their id number
router.post("/student", addToDbController);
router.get("/student/:id", getSingleStudentFromDbController);
export default router;
