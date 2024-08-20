import { client } from "../util/dbconnections.js";
import { Entity } from "electrodb";

// Define the Author entity
const Authors = new Entity(
  {
    model: {
      service: "BlogService",
      entity: "authors",
      version: "1",
    },
    attributes: {
      authorId: {
        type: "string",
        required: true,
      },
      name: {
        type: "string",
        required: true,
      },
      email: {
        type: "string",
        required: true,
      },
      bio: {
        type: "string",
      },
    },
    indexes: {
      authorIndex: {
        pk: {
          field: "pk",
          composite: ["authorId"],
        },
        sk: {
          field: "sk",
          composite: [],
        },
      },
    },
  },
  { table: "authors", client }
);

export { Authors };
