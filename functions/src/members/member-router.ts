import * as functions from "firebase-functions";
import {getMembersHandler, saveMembersHandler} from "./member-handler";

exports.create = functions.https.onRequest(
    async (request, response) => {
      const payload = request.body;
      const save = await saveMembersHandler(payload.collection, payload.data);
      response.json({result: `Member with ID: ${save} added.`});
    });

exports.get = functions.https.onRequest(
    async (request, response) => {
      const payload = request.query.collection;
      const data = await getMembersHandler(payload);
      response.json(data);
    });
