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
    const data = await (0, features_handler_1.getFeaturesHandler)(payload);
    response.json(data);
});
//# sourceMappingURL=features-router.js.map