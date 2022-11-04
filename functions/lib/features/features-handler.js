"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeaturesUniqueHandler = exports.getFeaturesWithFiltersHandler = exports.getFeaturesHandler = exports.saveFeatureHandler = void 0;
const features_services_1 = require("./features-services");
const logger_1 = require("firebase-functions/lib/logger");
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
const getFeaturesUniqueHandler = async (collection, documentId) => {
    var _a, _b, _c, _d, _e, _f;
    const data = await (0, features_services_1.getFeatureDocument)(collection, documentId);
    if (data === null || data === void 0 ? void 0 : data.exists) {
        return {
            id: data === null || data === void 0 ? void 0 : data.id,
            title: (_a = data === null || data === void 0 ? void 0 : data.data()) === null || _a === void 0 ? void 0 : _a.title,
            description: (_b = data === null || data === void 0 ? void 0 : data.data()) === null || _b === void 0 ? void 0 : _b.description,
            content: (_c = data === null || data === void 0 ? void 0 : data.data()) === null || _c === void 0 ? void 0 : _c.content,
            image: (_d = data === null || data === void 0 ? void 0 : data.data()) === null || _d === void 0 ? void 0 : _d.image,
            found: (_e = data === null || data === void 0 ? void 0 : data.data()) === null || _e === void 0 ? void 0 : _e.found,
            category: (_f = data === null || data === void 0 ? void 0 : data.data()) === null || _f === void 0 ? void 0 : _f.category,
        };
    }
    throw (0, logger_1.error)("Document not found");
};
exports.getFeaturesUniqueHandler = getFeaturesUniqueHandler;
//# sourceMappingURL=features-handler.js.map