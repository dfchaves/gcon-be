"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollection = exports.saveCollection = void 0;
const index_1 = require("../index");
const saveCollection = async (collection, data) => {
    const response = await index_1.db.collection(collection).add(data);
    return response.id;
};
exports.saveCollection = saveCollection;
const getCollection = async (collection) => {
    const collectionRef = index_1.db.collection(collection);
    const snapshot = await collectionRef.get();
    if (snapshot.empty) {
        console.log("No matching documents.");
        return;
    }
    return snapshot;
};
exports.getCollection = getCollection;
//# sourceMappingURL=firestore.js.map