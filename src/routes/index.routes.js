import { Router } from "express";
const router = Router();

// Add here any other index routes as needed
router.get("/", (req, res) => {
  res.json({
    message: "vc-ms-template api",
  });
});

export default router;