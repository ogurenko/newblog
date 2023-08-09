// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
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
var rehypeoptions = {
  // Use one of Shiki's packaged themes
  theme: "light-plus",
  // Set to true to keep the background color
  keepBackground: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node, id) {
    node.properties.className = ["word"];
  }
};
var contentlayer_config_default = makeSource({
  contentDirPath: "./posts",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[ehypePrettyCode, rehypeoptions]]
  }
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
//# sourceMappingURL=compiled-contentlayer-config-XGZZW2D7.mjs.map
