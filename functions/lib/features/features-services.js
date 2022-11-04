"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeatureDocument = exports.getFeaturesWithFilters = exports.getFeatures = exports.saveFeatures = void 0;
const firestore_1 = require("../utils/firestore");
const saveFeatures = async (collection, payload) => {
    return await (0, firestore_1.saveCollection)(collection, payload);
};
exports.saveFeatures = saveFeatures;
const getFeatures = async (collection) => {
    return await (0, firestore_1.getCollection)(collection);
};
exports.getFeatures = getFeatures;
const getFeaturesWithFilters = async (collection, filterParam, filterOperator, filterValue) => {
    return await (0, firestore_1.getCollectionWithFilters)(collection, filterParam, filterOperator, filterValue);
};
exports.getFeaturesWithFilters = getFeaturesWithFilters;
const getFeatureDocument = async (collection, documentId) => {
    return await (0, firestore_1.getDocument)(collection, documentId);
};
exports.getFeatureDocument = getFeatureDocument;
//# sourceMappingURL=features-services.js.map