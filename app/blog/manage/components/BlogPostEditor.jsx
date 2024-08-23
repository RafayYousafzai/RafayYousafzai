"use client";

import { useState } from "react";

import BlogPostForm from "./BlogPostForm";
import PostList from "./PostList";

const BlogPostEditor = () => {
  const [blog, setBlog] = useState({});

  return (
    <div className="w-full max-w-4xl mx-auto p-6 mb-20 bg-white dark:bg-neutral-900 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Create a New Blog Post
      </h1>
      <BlogPostForm blog={blog} />
      <PostList onEdit={(e) => setBlog(e)} />
    </div>
  );
};

export default BlogPostEditor;
