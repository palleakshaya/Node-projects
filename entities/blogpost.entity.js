import { client } from "../util/dbconnections.js";
import { Entity } from "electrodb";
const BlogPost = new Entity(
  {
    model: {
      service: "BlogService",
      entity: "blogpost",
      version: "1",
    },
    attributes: {
      authorId: {
        type: "string",
        required: true,
      },
      postId: {
        type: "string",
        required: true,
      },
      title: {
        type: "string",
        required: true,
      },
      content: {
        type: "string",
        required: true,
      },
      postDate: {
        type: "string",
        required: true,
      },
      tags: {
        type: "list",
        items: "string",
      },
    },
    indexes: {
      postIndex: {
        pk: {
          field: "pk",
          composite: ["authorId"],
        },
        sk: {
          field: "sk",
          composite: ["postDate", "postId"],
        },
      },
    },
  },
  { table: "blogpost", client }
);

export { BlogPost };
