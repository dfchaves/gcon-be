import * as functions from "firebase-functions";
import {saveFeatures} from "./features-services";
import {getFeaturesHandler} from "./features-handler";

exports.create = functions.https.onRequest(
    async (request, response) => {
      const payload = request.body;
      const save = await saveFeatures(payload.collection, payload.data);
      response.json({result: `Feature with ID: ${save} added.`});
    });

exports.get = functions.https.onRequest(
    async (request, response) => {
      const payload = request.query.collection;
      const data = await getFeaturesHandler(payload);
      response.json(data);
    });
