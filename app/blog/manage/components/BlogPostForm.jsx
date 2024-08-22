"use client";

import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { addDoc, collection } from "firebase/firestore";

import { db } from "@/lib/firebase/config";

const BlogPostForm = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleContentChange = (value) => setContent(value);

  const handleSave = async () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("Title and content cannot be empty.");

      return;
    }

    try {
      // Save blog post content to Firestore
      await addDoc(collection(db, "blogPosts"), {
        title,
        content,
        createdAt: new Date(),
      });

      alert("Blog post saved successfully!");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error saving blog post:", error);
      alert("Error saving blog post. Please try again.");
    }
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
    },
  };

  return (
    <div className="space-y-6">
      <div>
        <Input
          label="Title"
          placeholder="Enter your blog post title"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <h2 className="mb-2">Content</h2>
        <ReactQuill
          className="h-80 mb-6"
          modules={modules}
          theme="snow"
          value={content}
          onChange={handleContentChange}
        />
      </div>
      <Button fullWidth className="my-8" onClick={handleSave}>
        Save Blog Post
      </Button>
    </div>
  );
};

export default BlogPostForm;
