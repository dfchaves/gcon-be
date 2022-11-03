import {getCategories, saveCategories} from "./categories-services";
import {categoriesInfo} from "./categories-types";

export const saveCategoriesHandler = async (
    collection: string,
    data: categoriesInfo) => {
  return await saveCategories(collection, {
    id: data.id,
    title: data.title,
    description: data.description,
    image: data.image,
  });
};

export const getCategoriesHandler = async (collection: string):
    Promise<categoriesInfo[]> => {
  const data = await getCategories(collection);
  const membersList: categoriesInfo[] = [];
  data?.forEach((doc) => {
    const member: categoriesInfo = {
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      image: doc.data().image,
    };
    membersList.push(member);
  });
  return membersList;
};
