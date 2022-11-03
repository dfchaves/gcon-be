"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeaturesWithFiltersHandler = exports.getFeaturesHandler = exports.saveFeatureHandler = void 0;
const features_services_1 = require("./features-services");
const saveFeatureHandler = async (collection, data) => {
    return await (0, features_services_1.saveFeatures)(collection, {
        title: data.title,
        description: data.description,
        content: data.content,
        image: data.image,
        found: data.found,
        category: data.category,
    });
};
exports.saveFeatureHandler = saveFeatureHandler;
const getFeaturesHandler = async (collection) => {
    const data = await (0, features_services_1.getFeatures)(collection);
    const featureList = [];
    data === null || data === void 0 ? void 0 : data.forEach((doc) => {
        const feature = {
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
exports.getFeaturesHandler = getFeaturesHandler;
const getFeaturesWithFiltersHandler = async (collection, filterParam, filterOperator, filterValue) => {
    const data = await (0, features_services_1.getFeaturesWithFilters)(collection, filterParam, filterOperator, filterValue);
    const featureFilterList = [];
    data === null || data === void 0 ? void 0 : data.forEach((doc) => {
        const feature = {
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
exports.getFeaturesWithFiltersHandler = getFeaturesWithFiltersHandler;
//# sourceMappingURL=features-handler.js.map