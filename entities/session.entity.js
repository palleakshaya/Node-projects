import { Entity } from "electrodb"; //ORM(object relational mapping -> SDK is very hard to use so to make it easier, electrodb is used)
import { client } from "../util/dbconnections.js";
//client is the live connection to AWS

const session = new Entity(
  {
    model: {
      entity: "session",
      version: "3",
      service: "SessionService",
    },
    attributes: {
      sessionId: {
        type: "number",
        required: true,
      },
      username: {
        type: "string",
        required: true,
      },
      token: {
        type: "string",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["sessionId"],
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
  { client, table: "session" }
);

export { session };
