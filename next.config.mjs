import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeMdxImportMedia from 'rehype-mdx-import-media'
import remarkHeadingID from 'remark-heading-id';
import { remarkMdxToc } from "remark-mdx-toc";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      rehypeMdxImportMedia,
    ],
    remarkPlugins: [
      remarkFrontmatter,
      remarkMdxFrontmatter,
      remarkHeadingID,
      remarkMdxToc
    ],
  },
})

export default withMDX(nextConfig);
