"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMessages = void 0;
const functions = require("firebase-functions");
exports.loadMessages = functions.https.onRequest(async (request, response) => {
    const txt = request.query.text;
    const writeResult = await db.collection("messages").add({ original: txt });
    response.json({ result: `Message with ID: ${writeResult.id} added.` });
});
//# sourceMappingURL=features-services.js.map