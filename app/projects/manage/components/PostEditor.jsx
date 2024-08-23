"use client";

import { useState } from "react";

import PostForm from "./PostForm";
import PostList from "./PostList";

const PostEditor = () => {
  const [project, setProject] = useState({});

  return (
    <div className="w-full max-w-4xl mx-auto p-6 mb-20 bg-white dark:bg-neutral-900 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Create a New Blog Post
      </h1>
      <PostForm project={project} />
      <PostList onEdit={(e) => setProject(e)} />
    </div>
  );
};

export default PostEditor;
