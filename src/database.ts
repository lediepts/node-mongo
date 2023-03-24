import { MongoClient, MongoClientOptions, Collection } from "mongodb";

const options: MongoClientOptions = {};
const username = encodeURIComponent("lediepts");
const password = encodeURIComponent("P@ssw0rd");
const uri = `mongodb+srv://${username}:${password}@main.g1zf50u.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, options);
const database = client.db("main");

export const usersDB = database.collection<{
  name: string;
}>("users");
