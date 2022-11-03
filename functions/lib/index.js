"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const admin = require("firebase-admin");
admin.initializeApp();
exports.db = admin.firestore();
exports.members = require("./members/member-router");
exports.features = require("./features/features-router");
exports.categories = require("./categories/categories-router");
//# sourceMappingURL=index.js.map