// models/User.js
import { getMongoClient } from "@/lib/mongodb";

export async function createUser(userData) {
  const client = await getMongoClient();
  const db = client.db(); // default DB from connection string
  const usersCollection = db.collection("users");

  const result = await usersCollection.insertOne(userData);
  return result;
}

export async function findUserByEmail(email) {
  const client = await getMongoClient();
  const db = client.db();
  const usersCollection = db.collection("users");

  const user = await usersCollection.findOne({ email });
  return user;
}

