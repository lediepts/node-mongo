import express from "express";
import { usersDB } from "../../database";
export const user = express.Router();
user.get("/", async (req, res) => {
  try {
    const users = await usersDB.find().toArray();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.sendStatus(Number(error) || 500);
  }
});
