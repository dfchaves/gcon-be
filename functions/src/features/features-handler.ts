import {getFeatures, saveFeatures} from "./features-services";
import {featureInfo} from "./features-types";

export const saveFeatureHandler = async (collection: string, data: any) => {
  return await saveFeatures(collection, {
    title: data.title,
    description: data.lastName,
    content: data.content,
    image: data.image,
  });
};

export const getFeaturesHandler = async (collection: any):
    Promise<featureInfo[]> => {
  const data = await getFeatures(collection);
  const membersList: featureInfo[] = [];
  data?.forEach((doc) => {
    const member: featureInfo = {
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      content: doc.data().content,
      image: doc.data().image,
    };
    membersList.push(member);
  });
  return membersList;
};
