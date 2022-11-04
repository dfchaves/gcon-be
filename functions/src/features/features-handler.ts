import {
  getFeatureDocument,
  getFeatures,
  getFeaturesWithFilters,
  saveFeatures,
} from "./features-services";
import {featureInfo} from "./features-types";
import {firestore} from "firebase-admin";
import WhereFilterOp = firestore.WhereFilterOp;
import {error} from "firebase-functions/lib/logger";

export const saveFeatureHandler = async (
    collection: string,
    data: featureInfo) => {
  return await saveFeatures(collection, {
    title: data.title,
    description: data.description,
    content: data.content,
    image: data.image,
    found: data.found,
    category: data.category,
  });
};

export const getFeaturesHandler = async (collection: string):
    Promise<featureInfo[]> => {
  const data = await getFeatures(collection);
  const featureList: featureInfo[] = [];
  data?.forEach((doc) => {
    const feature: featureInfo = {
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      content: doc.data().content,
      image: doc.data().image,
      found: doc.data().found,
      category: doc.data().category,
    };
    featureList.push(feature);
  });
  return featureList;
};

export const getFeaturesWithFiltersHandler = async (
    collection: string,
    filterParam: string,
    filterOperator: WhereFilterOp,
    filterValue: string): Promise<featureInfo[]> => {
  const data = await getFeaturesWithFilters(
      collection,
      filterParam,
      filterOperator,
      filterValue);
  const featureFilterList: featureInfo[] = [];
  data?.forEach((doc) => {
    const feature: featureInfo = {
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      content: doc.data().content,
      image: doc.data().image,
      found: doc.data().found,
      category: doc.data().category,
    };
    featureFilterList.push(feature);
  });
  return featureFilterList;
};

export const getFeaturesUniqueHandler = async (
    collection: string, documentId: string):
    Promise<featureInfo> => {
  const data = await getFeatureDocument(collection, documentId);
  if (data?.exists) {
    return {
      id: data?.id,
      title: data?.data()?.title,
      description: data?.data()?.description,
      content: data?.data()?.content,
      image: data?.data()?.image,
      found: data?.data()?.found,
      category: data?.data()?.category,
    };
  }
  throw error("Document not found");
};
