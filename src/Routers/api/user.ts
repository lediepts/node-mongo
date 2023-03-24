import express from "express";
import { usersDB } from "../../database";
import { ServiceRequest, ServiceResponse } from "../../interfaces";

export const user = express.Router();

user.get("/", async (req: ServiceRequest, res: ServiceResponse) => {
  try {
    const users = await usersDB.find().toArray();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.sendStatus(Number(error) || 500);
  }
});
user.post(
  "/",
  async (
    { body: { name } }: ServiceRequest<unknown, unknown, { name: string }>,
    res: ServiceResponse
  ) => {
    try {
      await usersDB.insertOne({ name });
      res.sendStatus(201).end();
    } catch (error) {
      console.log(error);
      res.sendStatus(Number(error) || 500);
    }
  }
);
