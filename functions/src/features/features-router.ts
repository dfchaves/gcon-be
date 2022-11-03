import * as functions from "firebase-functions";
import {saveFeatures} from "./features-services";
import {
  getFeaturesHandler,
  getFeaturesWithFiltersHandler} from "./features-handler";

exports.create = functions.https.onRequest(
    async (request, response) => {
      const payload = request.body;
      const save = await saveFeatures(payload.collection, payload.data);
      response.json({result: `Feature with ID: ${save} added.`});
    });

exports.get = functions.https.onRequest(
    async (request, response) => {
      const payload = request.query.collection;
      if (payload != null) {
        const data = await getFeaturesHandler(payload.toString());
        response.json(data);
      }
    });

exports.getWithFilters = functions.https.onRequest(
    async (request, response) => {
      const {
        collection,
        filterParam,
        filterOperator,
        filterValue} = request.body;
      const data = await getFeaturesWithFiltersHandler(
          collection,
          filterParam,
          filterOperator,
          filterValue);
      response.json(data);
    });


