// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    // title: { type: "string", required: true },
    // date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./posts",
  documentTypes: [Post]
  // mdx: {
  //   remarkPlugins: [remarkGfm],
  //   rehypePlugins: [rehypeSlug, [rehypePrettyCode]],
  // },
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-KIGKHYB3.mjs.map
