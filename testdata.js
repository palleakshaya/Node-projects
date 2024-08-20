import { Authors } from "./entities/authors.entity.js";
import { BlogPost } from "./entities/blogpost.entity.js";

const insertData = async () => {
  const sampleAuthors = [
    {
      authorId: "A001",
      name: "John Doe",
      email: "john@example.com",
      bio: "Tech enthusiast and blogger",
    },
    {
      authorId: "A002",
      name: "Jane Smith",
      email: "jane@example.com",
      bio: "Writes about tech and science",
    },
  ];

  const samplePosts = [
    {
      authorId: "A001",
      postId: "P001",
      title: "Introduction to DynamoDB",
      content: "DynamoDB is a NoSQL database...",
      postDate: "2024-08-01",
      tags: ["DynamoDB", "NoSQL"],
    },
    {
      authorId: "A001",
      postId: "P002",
      title: "Advanced DynamoDB Queries",
      content: "Explore advanced queries in DynamoDB...",
      postDate: "2024-08-02",
      tags: ["DynamoDB", "Advanced"],
    },
    {
      authorId: "A002",
      postId: "P003",
      title: "DynamoDB Best Practices",
      content: "Learn best practices for DynamoDB...",
      postDate: "2024-08-01",
      tags: ["DynamoDB", "BestPractices"],
    },
    {
      authorId: "A002",
      postId: "P004",
      title: "Understanding NoSQL Databases",
      content: "An overview of NoSQL databases...",
      postDate: "2024-08-03",
      tags: ["NoSQL", "Database"],
    },
  ];

  // Insert authors
  for (const author of sampleAuthors) {
    await Authors.put(author).go();
  }

  // Insert posts
  for (const post of samplePosts) {
    await BlogPost.put(post).go();
  }

  console.log("Sample data inserted successfully!");
};
// insertData();

// await BlogPost.query
//   .where({
//     authorId: "A002",
//   })
//   .go();

//To get all authors

// Using "SCAN"

// const blogs = await BlogPost.scan.go();
// console.log(blogs);

// const blog = await BlogPost.scan
//   .where(({ authorId }, { eq }) => `${eq(authorId, "A002")}`)
//   .go();

// console.log(blog.data);

// Using "Query"

// const BlogQ = await BlogPost.query
//   .postIndex({
//     authorId: "A002",
//   })
//   .go();
// console.log(BlogQ.data);

//Task 2 - Blog which contains the word "NoSql"

// const blog = await BlogPost.scan
//   .where(({ content }, { contains }) => `${contains(content, "NoSQL")}`)
//   .go();
// console.log(blog);

// Task 3 - Get all the blogs made - A002 and which contains the word "NoSQL"

// const blog = await BlogPost.scan
//   .where(
//     ({ authorId }, { eq }) => `
//       ${eq(authorId, "A002")}
//   `
//   )
//   .where(
//     ({ content }, { contains }) => `
//       ${contains(content, "NoSQL")}
//   `
//   )
//   .go();
// console.log(blog);

//Task 4 - Get all Blogs made from 2024-08-01 to 2024-08-22

// const blog = await BlogPost.scan
//   .where(({ postDate }, { between }) =>
//     between(postDate, "2024-08-01", " 2024-08-22")
//   )
//   .go();

// console.log(blog);

//Task 5 - Get author details + posts made by "A001" author

// const author = await Authors.get({ authorId: "A001" }).go();
// console.log(author);
// const posts = await BlogPost.scan
//   .where(
//     ({ authorId }, { eq }) => `
//       ${eq(authorId, "A001")}
//   `
//   )
//   .go();
// console.log(posts);
// const result = {
//   ...author.data,
//   posts: posts.data,
// };
// console.log(result);

//Task 6 - find number of posts made by "A002" author

// const posts = await BlogPost.scan
//   .where(
//     ({ authorId }, { eq }) => `
//       ${eq(authorId, "A002")}
//   `
//   )
//   .go();
// console.log("No. of posts :", posts.data.length);

//Task 7 - Get latest 2 blogs that were made

// const posts = await BlogPost.scan.go({ limit: 2 });
// console.log(posts);

//BATCH MODE

// (async () => {
//   //  Batch get
//   const authors = await Authors.get([
//     { authorId: "A001" },
//     { authorId: "A002" },
//     { authorId: "A003" },
//     { authorId: "A004" },
//   ]).go();
//   console.log(authors);
// })();

// // Batch Put
(async () => {
  const sampleAuthors = [
    {
      authorId: "A003",
      name: "Teja Doe",
      email: "teja@example.com",
      bio: "Tech enthusiast and blogger",
    },
    {
      authorId: "A004",
      name: "Nithin Smith",
      email: "nithin@example.com",
      bio: "Writes about tech and science",
    },
  ];

  //   // Batch writing
  const authors = await Authors.put(sampleAuthors).go();
  console.log("Batch write Completed");
})();
