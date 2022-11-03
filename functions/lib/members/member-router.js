"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const member_handler_1 = require("./member-handler");
exports.create = functions.https.onRequest(async (request, response) => {
    const payload = request.body;
    const save = await (0, member_handler_1.saveMembersHandler)(payload.collection, payload.data);
    response.json({ result: `Member with ID: ${save} added.` });
});
exports.get = functions.https.onRequest(async (request, response) => {
    const payload = request.query.collection;
    if (payload != null) {
        const data = await (0, member_handler_1.getMembersHandler)(payload.toString());
        response.json(data);
    }
});
//# sourceMappingURL=member-router.js.map