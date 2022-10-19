"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMembersHandler = exports.saveMembersHandler = void 0;
const services_1 = require("../members/services");
const saveMembersHandler = async (collection, data) => {
    return await (0, services_1.saveMembers)(collection, {
        name: data.name,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        profession: data.profession,
    });
};
exports.saveMembersHandler = saveMembersHandler;
const getMembersHandler = async (collection) => {
    const data = await (0, services_1.getMembers)(collection);
    const membersList = [];
    data === null || data === void 0 ? void 0 : data.forEach((doc) => {
        const member = {
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
exports.getMembersHandler = getMembersHandler;
//# sourceMappingURL=handler.js.map