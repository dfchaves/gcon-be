import {getCollection, saveCollection} from "../utils/firestore";
import {featureInfo} from "./features-types";

export const saveFeatures =
    async (collection: string, payload: featureInfo) => {
      return await saveCollection(collection, payload);
    };

export const getFeatures = async (collection: string) => {
  return await getCollection(collection);
};
