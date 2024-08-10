import express, { Router } from "express";
import { getUserById, getUsers } from "../controllers/user.controllers";

const router: Router = express.Router();

router.get("/", async (req, res) => {
  return res.json({ users: await getUsers() });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  return res.json({ user: await getUserById(id) });
});

export default router;
