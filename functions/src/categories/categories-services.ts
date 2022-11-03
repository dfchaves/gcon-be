import {
  getCollection,
  getCollectionWithFilters,
  saveCollection,
} from "../utils/firestore";
import {categoriesInfo} from "./categories-types";
import {firestore} from "firebase-admin";
import WhereFilterOp = firestore.WhereFilterOp;

export const saveCategories =
    async (collection: string, payload: categoriesInfo) => {
      return await saveCollection(collection, payload);
    };

export const getCategories = async (collection: string) => {
  return await getCollection(collection);
};

export const getCategoriesWithFilters = async (
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
