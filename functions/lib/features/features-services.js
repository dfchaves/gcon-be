"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeatures = exports.saveFeatures = void 0;
const firestore_1 = require("../utils/firestore");
const saveFeatures = async (collection, payload) => {
    return await (0, firestore_1.saveCollection)(collection, payload);
};
exports.saveFeatures = saveFeatures;
const getFeatures = async (collection) => {
    return await (0, firestore_1.getCollection)(collection);
};
exports.getFeatures = getFeatures;
//# sourceMappingURL=features-services.js.map