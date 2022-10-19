import {getMembers, saveMembers} from "./member-services";
import {memberInfo} from "./member-types";

export const saveMembersHandler = async (collection: string, data: any) => {
  return await saveMembers(collection, {
    name: data.name,
    lastName: data.lastName,
    phoneNumber: data.phoneNumber,
    profession: data.profession,
  });
};

export const getMembersHandler = async (collection: any):
    Promise<memberInfo[]> => {
  const data = await getMembers(collection);
  const membersList: memberInfo[] = [];
  data?.forEach((doc) => {
    const member: memberInfo = {
      id: doc.id,
      name: doc.data().name,
      lastName: doc.data().lastName,
      phoneNumber: doc.data().phoneNumber,
      profession: doc.data().profession,
    };
    membersList.push(member);
  });
  return membersList;
};
