import express, { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUserByName,
  getUsers,
} from "../controllers/user.controllers";
import { createUserSchema } from "../validator/user";

const router: Router = express.Router();

router.get("/", async (req, res) => {
  return res.json({ users: await getUsers() });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  return res.json({ user: await getUserById(id) });
});

router.get("/name/:name", async (req, res) => {
  const { name } = req.params;
  return res.json({ user: await getUserByName(name) });
});

router.post("/", async (req, res) => {
  const user = createUserSchema.parse(req.body);
  return res.json({ message: await createUser(user) });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  return res.json({ message: await deleteUser(id) });
});

export default router;
