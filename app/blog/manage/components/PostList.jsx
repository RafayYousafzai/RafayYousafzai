"use client";

import React, { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { Button } from "@nextui-org/button";

import { db } from "@/lib/firebase/config";

const PostList = ({ posts, onDelete }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async (postId) => {
    try {
      setLoading(true);
      await deleteDoc(doc(db, "blogPosts", postId));
      onDelete(postId);
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Error deleting post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold mb-4 text-gray-800">
                {post.title}
              </h1>
              <Button
                className="ml-4"
                color="error"
                onClick={() => handleDelete(post.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No posts available.</p>
      )}
    </div>
  );
};

export default PostList;
{
  /* <div
dangerouslySetInnerHTML={{ __html: post.content }}
className="prose max-w-none text-gray-700"
/> */
}
