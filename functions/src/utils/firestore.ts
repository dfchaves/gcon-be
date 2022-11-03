import {db} from "../index";
import {firestore} from "firebase-admin";
import DocumentData = firestore.DocumentData;
import WhereFilterOp = firestore.WhereFilterOp;

export const saveCollection = async (
    collection: string,
    data: DocumentData) => {
  const response = await db.collection(collection).add(data);
  return response.id;
};

export const getCollection = async (collection: string) => {
  const collectionRef = db.collection(collection);
  const snapshot = await collectionRef.get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  return snapshot;
};

export const getCollectionWithFilters =
    async (collection: string,
        filterParam: string,
        filterOperator: WhereFilterOp,
        filterValue: string) => {
      const collectionRef = db.collection(collection);
      const snapshotFilter = await collectionRef
          .where(filterParam, filterOperator, filterValue).get();
      if (snapshotFilter.empty) {
        console.log("No matching documents.");
        return;
      }
      return snapshotFilter;
    };
