import { Entity } from "electrodb"; //ORM(object relational mapping -> SDK is very hard to use so to make it easier, electrodb is used)
import { client } from "../util/dbconnections.js";
//client is the live connection to AWS

const Users = new Entity(
  {
    model: {
      entity: "Users",
      version: "2",
      service: "UsersService",
    },
    attributes: {
      username: {
        type: "string",
      },
      password: {
        type: "string",
        // required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["username"],
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
  { client, table: "Users" }
);

export { Users };
