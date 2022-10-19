"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMembers = exports.saveMembers = void 0;
const firestore_1 = require("../utils/firestore");
const saveMembers = async (collection, payload) => {
    return await (0, firestore_1.saveCollection)(collection, payload);
};
exports.saveMembers = saveMembers;
const getMembers = async (collection) => {
    return await (0, firestore_1.getCollection)(collection);
};
exports.getMembers = getMembers;
//# sourceMappingURL=member-services.js.map