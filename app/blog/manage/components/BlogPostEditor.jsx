"use client";

import React from "react";
import { collection, getDocs, query } from "firebase/firestore";

import { db } from "../../../../lib/firebase/config";

import BlogPostForm from "./BlogPostForm";
import PostList from "./PostList";

const BlogPostEditor = () => {
  const [posts, setPosts] = React.useState([]);

  const fetchPosts = async () => {
    const q = query(collection(db, "blogPosts"));
    const querySnapshot = await getDocs(q);
    const postsArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setPosts(postsArray);
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Create a New Blog Post
      </h1>
      <BlogPostForm />
      <PostList posts={posts} onDelete={handleDeletePost} />
    </div>
  );
};

export default BlogPostEditor;
