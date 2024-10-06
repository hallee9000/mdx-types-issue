import React from "react"
import Content, { frontmatter } from "@/content/post.mdx";

export default async function PostPage() {

  return (
    <div className="py-6">
      <h1 className="mb-10 text-4xl font-bold">{frontmatter.title}</h1>
      <div className="flex gap-6">
        <div className="prose flex-1">
          <Content />
        </div>
      </div>
    </div>
  );
}