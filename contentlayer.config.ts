import {
  defineDocumentType,
  ComputedFields,
  makeSource,
} from "contentlayer/source-files";
import highlight from "rehype-highlight";
import { writeFileSync } from "fs";
import GithubSlugger from "github-slugger";
import path from "path";
// Remark packages
import remarkGfm from "remark-gfm";
import {
  remarkExtractFrontmatter,
  remarkCodeTitles,
  remarkImgToJsx,
  extractTocHeadings,
} from "pliny/mdx-plugins/index.js";
// Rehype packages
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeCitation from "rehype-citation";
import rehypePrismPlus from "rehype-prism-plus";
import rehypePresetMinify from "rehype-preset-minify";
// import siteMetadata from "./data/siteMetadata";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer";

// const root = process.cwd();

// const computedFields: ComputedFields = {
//   // readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
//   slug: {
//     type: "string",
//     resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ""),
//   },
//   path: {
//     type: "string",
//     resolve: (doc) => doc._raw.flattenedPath,
//   },
//   filePath: {
//     type: "string",
//     resolve: (doc) => doc._raw.sourceFilePath,
//   },
//   toc: { type: "string", resolve: (doc) => extractTocHeadings(doc.body.raw) },
// };

/**
 * Count the occurrences of all tags across Post posts and write to json file
 */
// function createTagCount(allPosts) {
//   const tagCount: Record<string, number> = {};
//   allPosts.forEach((file) => {
//     if (file.tags && file.draft !== true) {
//       file.tags.forEach((tag) => {
//         const formattedTag = GithubSlugger.slug(tag);
//         if (formattedTag in tagCount) {
//           tagCount[formattedTag] += 1;
//         } else {
//           tagCount[formattedTag] = 1;
//         }
//       });
//     }
//   });
//   writeFileSync("./app/tag-data.json", JSON.stringify(tagCount));
// }

// function createSearchIndex(allPosts) {
//   if (
//     siteMetadata?.search?.provider === "kbar" &&
//     siteMetadata.search.kbarConfig.searchDocumentsPath
//   ) {
//     writeFileSync(
//       `public/${siteMetadata.search.kbarConfig.searchDocumentsPath}`,
//       JSON.stringify(allCoreContent(sortPosts(allPosts)))
//     );
//     console.log("Local search index generated...");
//   }
// }

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    author: { type: "string", required: true },
    createdAt: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    description: { type: "string", required: true },
    // slug: { type: "string", required: true },
    // tags: { type: "list", of: Tag },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}));

// export const Authors = defineDocumentType(() => ({
//   name: "Authors",
//   filePathPattern: "authors/**/*.mdx",
//   contentType: "mdx",
//   fields: {
//     name: { type: "string", required: true },
//     avatar: { type: "string" },
//     occupation: { type: "string" },
//     company: { type: "string" },
//     email: { type: "string" },
//     twitter: { type: "string" },
//     linkedin: { type: "string" },
//     github: { type: "string" },
//     layout: { type: "string" },
//   },
//   computedFields,
// }));

export default makeSource({
  contentDirPath: "./posts",
  documentTypes: [Post],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkExtractFrontmatter,
      remarkGfm,
      remarkCodeTitles,
      remarkImgToJsx,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeKatex,
      [rehypePrismPlus, { defaultLanguage: "js", ignoreMissing: true }],
      rehypePresetMinify,
    ],
  },
});
