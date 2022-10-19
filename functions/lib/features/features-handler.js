"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeaturesHandler = exports.saveFeatureHandler = void 0;
const features_services_1 = require("./features-services");
const saveFeatureHandler = async (collection, data) => {
    return await (0, features_services_1.saveFeatures)(collection, {
        title: data.title,
        description: data.lastName,
        content: data.content,
        image: data.image,
    });
};
exports.saveFeatureHandler = saveFeatureHandler;
const getFeaturesHandler = async (collection) => {
    const data = await (0, features_services_1.getFeatures)(collection);
    const membersList = [];
    data === null || data === void 0 ? void 0 : data.forEach((doc) => {
        const member = {
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
exports.getFeaturesHandler = getFeaturesHandler;
//# sourceMappingURL=features-handler.js.map