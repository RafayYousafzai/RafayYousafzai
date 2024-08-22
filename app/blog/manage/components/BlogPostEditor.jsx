"use client";

import BlogPostForm from "./BlogPostForm";
import PostList from "./PostList";

import { useFirebase } from "@/context/FirebaseContext";

const BlogPostEditor = () => {
  const { blogs, loading } = useFirebase();

  return (
    <div className="w-full max-w-4xl mx-auto p-6 mb-20 bg-white dark:bg-neutral-900 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Create a New Blog Post
      </h1>
      <BlogPostForm />
      <PostList posts={blogs} />
    </div>
  );
};

export default BlogPostEditor;
