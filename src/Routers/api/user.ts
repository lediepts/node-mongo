import express from "express";
export const user = express.Router();
user.get("/", async (req, res) => {
  try {
    res.send([]);
  } catch (error) {
    console.log(error);
    res.sendStatus(Number(error) || 500);
  }
});
