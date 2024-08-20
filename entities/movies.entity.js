import { Entity } from "electrodb"; //ORM(object relational mapping -> SDK is very hard to use so to make it easier, electrodb is used)
import { client } from "../util/dbconnections.js";
//client is the live connection to AWS

const Movies = new Entity(
  {
    model: {
      entity: "movies",
      version: "3",
      service: "MovieService",
    },
    attributes: {
      movieId: {
        type: "string",
      },
      name: {
        type: "string",
      },
      poster: {
        type: "string",
        // required: true,
      },
      rating: {
        type: "number",
        required: true,
      },
      trailer: {
        type: "string",
      },
      summary: {
        type: "string",
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["movieId"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
    // add your DocumentClient and TableName as a second parameter
  },
  { client, table: "movies" }
);

export { Movies };
