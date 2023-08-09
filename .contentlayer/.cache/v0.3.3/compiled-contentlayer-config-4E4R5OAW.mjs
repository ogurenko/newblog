// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
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
var prettyCodeOptions = {
  theme: "material-theme-palenight",
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["highlighted", "word"];
  }
};
var contentlayer_config_default = makeSource({
  contentDirPath: "./posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [rehypePrettyCode, prettyCodeOptions]
    ]
  }
  // mdx: {
  //   remarkPlugins: [
  // remarkExtractFrontmatter,
  // remarkMath,
  // remarkImgToJsx,
  // ],
  // rehypePlugins: [
  //   rehypeSlug,
  //   rehypeAutolinkHeadings,
  //   rehypePrism,
  // rehypeKatex,
  // [rehypeCitation, { path: path.join(root, "data") }],
  // [rehypePrismPlus, { defaultLanguage: "js", ignoreMissing: true }],
  // rehypePresetMinify,
  // ],
  // },
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-4E4R5OAW.mjs.map
