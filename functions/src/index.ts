import * as admin from "firebase-admin";


admin.initializeApp();
export const db = admin.firestore();

exports.members = require("./members/member-router");
exports.features = require("./features/features-router");
exports.categories = require("./categories/categories-router");
