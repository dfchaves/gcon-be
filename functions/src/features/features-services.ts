import {
  getCollection,
  getCollectionWithFilters,
  saveCollection,
} from "../utils/firestore";
import {featureInfo} from "./features-types";
import {firestore} from "firebase-admin";
import WhereFilterOp = firestore.WhereFilterOp;

export const saveFeatures =
    async (collection: string, payload: featureInfo) => {
      return await saveCollection(collection, payload);
    };

export const getFeatures = async (collection: string) => {
  return await getCollection(collection);
};

export const getFeaturesWithFilters = async (
    collection: string,
    filterParam: string,
    filterOperator: WhereFilterOp,
    filterValue: string) => {
  return await getCollectionWithFilters(
      collection,
      filterParam,
      filterOperator,
      filterValue);
};
