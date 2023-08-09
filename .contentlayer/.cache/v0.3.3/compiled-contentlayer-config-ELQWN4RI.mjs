// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    author: { type: "string", required: true },
    createdAt: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    description: { type: "string", required: true }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./posts",
  documentTypes: [Post]
  // mdx: {
  //   remarkPlugins: [remarkGfm],
  //   rehypePlugins: [
  //     rehypeSlug,
  //     rehypeCodeTitles,
  //     [rehypePrism],
  //     [rehypeAutolinkHeadings],
  //     [
  //       rehypePrettyCode,
  //       {
  //         theme: "one-dark-pro",
  //         onVisitLine(node) {
  //           // Prevent lines from collapsing in `display: grid` mode, and allow empty
  //           // lines to be copy/pasted
  //           if (node.children.length === 0) {
  //             node.children = [{ type: "text", value: " " }];
  //           }
  //         },
  //         onVisitHighlightedLine(node) {
  //           node.properties.className.push("line--highlighted");
  //         },
  //         onVisitHighlightedWord(node) {
  //           node.properties.className = ["word--highlighted"];
  //         },
  //       },
  //     ],
  //   ],
  // },
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ELQWN4RI.mjs.map
