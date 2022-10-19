import {getCollection, saveCollection} from "../utils/firestore";
import {memberInfo} from "./member-types";

export const saveMembers = async (collection: string, payload: memberInfo) => {
  return await saveCollection(collection, payload);
};

export const getMembers = async (collection: string) => {
  return await getCollection(collection);
};
