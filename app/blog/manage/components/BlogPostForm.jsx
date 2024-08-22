"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import FileUpload from "@/components/ui/file-upload";
import { db, storage } from "@/lib/firebase/config";

const BlogPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleFileUpload = (files) => {
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleContentChange = (value) => setContent(value);

  const handleSave = async () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("Title and content cannot be empty.");

      return;
    }

    let coverPhotoUrl = "";

    if (file) {
      const fileRef = ref(storage, `coverPhotos/${file.name}`);
      const uploadTask = uploadBytesResumable(fileRef, file);

      try {
        await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            null,
            (error) => reject(error),
            async () => {
              coverPhotoUrl = await getDownloadURL(uploadTask.snapshot.ref);
              resolve();
            },
          );
        });
      } catch (error) {
        alert("Error uploading cover photo. Please try again.");

        return;
      }
    }

    try {
      // Save blog post content to Firestore
      await addDoc(collection(db, "blogPosts"), {
        title,
        content,
        coverPhotoUrl,
        createdAt: new Date(),
      });

      alert("Blog post saved successfully!");
      setTitle("");
      setContent("");
      setFile(null);
    } catch (error) {
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
      <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-neutral-900  border-neutral-200 dark:border-neutral-800 rounded-lg">
        <FileUpload
          accept="image/*"
          multiple={false}
          onChange={handleFileUpload}
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
