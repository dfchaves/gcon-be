"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const features_services_1 = require("./features-services");
const features_handler_1 = require("./features-handler");
exports.create = functions.https.onRequest(async (request, response) => {
    const payload = request.body;
    const save = await (0, features_services_1.saveFeatures)(payload.collection, payload.data);
    response.json({ result: `Feature with ID: ${save} added.` });
});
exports.get = functions.https.onRequest(async (request, response) => {
    const payload = request.query.collection;
    if (payload != null) {
        const data = await (0, features_handler_1.getFeaturesHandler)(payload.toString());
        response.json(data);
    }
});
exports.getWithFilters = functions.https.onRequest(async (request, response) => {
    const { collection, filterParam, filterOperator, filterValue } = request.body;
    const data = await (0, features_handler_1.getFeaturesWithFiltersHandler)(collection, filterParam, filterOperator, filterValue);
    response.json(data);
});
exports.getFeatureUnique = functions.https.onRequest(async (request, response) => {
    const { collection, documentId, } = request.body;
    const data = await (0, features_handler_1.getFeaturesUniqueHandler)(collection, documentId);
    response.json(data);
});
//# sourceMappingURL=features-router.js.map