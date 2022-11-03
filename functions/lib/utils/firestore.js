"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollectionWithFilters = exports.getCollection = exports.saveCollection = void 0;
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
const getCollectionWithFilters = async (collection, filterParam, filterOperator, filterValue) => {
    const collectionRef = index_1.db.collection(collection);
    const snapshotFilter = await collectionRef
        .where(filterParam, filterOperator, filterValue).get();
    if (snapshotFilter.empty) {
        console.log("No matching documents.");
        return;
    }
    return snapshotFilter;
};
exports.getCollectionWithFilters = getCollectionWithFilters;
//# sourceMappingURL=firestore.js.map