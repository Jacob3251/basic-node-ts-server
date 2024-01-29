import express from "express";
import {
  addTeacherToDbController,
  getAllTeacherController,
} from "./teacher.controller";
const router = express.Router();
// posting teacher information
router.post("/teacher", addTeacherToDbController);
// getting all the teachers
router.get("/teacher", getAllTeacherController);

export default router;
