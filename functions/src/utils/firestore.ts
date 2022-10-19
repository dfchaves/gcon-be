import {db} from "../index";
import {firestore} from "firebase-admin";
import DocumentData = firestore.DocumentData;

export const saveCollection = async (collection:string, data: DocumentData) => {
  const response = await db.collection(collection).add(data);
  return response.id;
};

export const getCollection = async (collection:string) => {
  const collectionRef = db.collection(collection);
  const snapshot = await collectionRef.get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  return snapshot;
};
