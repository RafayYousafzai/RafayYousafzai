"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";

import BlogPostForm from "./BlogPostForm";
import PostList from "./PostList";

import { db } from "@/lib/firebase/config";

const BlogPostEditor = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const q = query(collection(db, "blogPosts"));
    const querySnapshot = await getDocs(q);
    const postsArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setPosts(postsArray);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-neutral-900 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Create a New Blog Post
      </h1>
      <BlogPostForm />
      <PostList posts={posts} onDelete={handleDeletePost} />
    </div>
  );
};

export default BlogPostEditor;
