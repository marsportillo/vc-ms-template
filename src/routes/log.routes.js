import { Router } from "express";
import { createLog, getLogs } from "../controllers/log.controller.js";

const router = Router();

// POST /api/logs
router.post("/", createLog);

// GET /api/logs
router.get("/", getLogs);

export default router;