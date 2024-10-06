declare module "*.mdx" {
  import { Element, MDXProps } from "mdx/types";
  import type { TocEntry } from 'remark-mdx-toc';

  export default function MDXContent(props: MDXProps): Element;

  // 导出 frontmatter 和 toc
  export const frontmatter: {
    title: string;
  };

  export const toc: TocEntry[];

}