import * as functions from "firebase-functions";
import * as categories from "./categories-handler";

exports.create = functions.https.onRequest(
    async (request, response) => {
      const payload = request.body;
      const save = await categories
          .saveCategoriesHandler(payload.collection, payload.data);
      response.json({result: `Categories with ID: ${save} added.`});
    });

exports.get = functions.https.onRequest(
    async (request, response) => {
      const payload = request.query.collection;
      if (payload != null) {
        const data = await categories.getCategoriesHandler(payload.toString());
        response.json(data);
      }
    });
