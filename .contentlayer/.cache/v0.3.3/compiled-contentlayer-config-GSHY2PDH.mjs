// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import rehypeCodeTitles from "rehype-code-titles";
import remarkExternalLinks from "remark-external-links";
import rehypePrism from "rehype-prism-plus";
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
  documentTypes: [Post],
  // mdx: {
  //   remarkPlugins: [remarkFrontmatter],
  //   rehypePlugins: [
  //     rehypeSlug,
  //     [rehypeAutolinkHeadings, { behavior: "wrap" }],
  //     [rehypePrettyCode, prettyCodeOptions],
  //   ],
  // },
  mdx: {
    remarkPlugins: [
      // remarkExtractFrontmatter,
      remarkGfm
      // remarkCodeTitles,
      // remarkMath,
      // remarkImgToJsx,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings
      // rehypeKatex,
      // [rehypeCitation, { path: path.join(root, "data") }],
      // [rehypePrismPlus, { defaultLanguage: "js", ignoreMissing: true }],
      // rehypePresetMinify,
    ]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-GSHY2PDH.mjs.map
