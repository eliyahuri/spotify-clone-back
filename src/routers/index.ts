import express, { Router, Request, Response } from "express";

// Create a new router instance
const router: Router = express.Router();

// Define your routes
router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello, World!" });
});

// Export the router
export default router;
