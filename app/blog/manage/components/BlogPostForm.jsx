"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

import FileUpload from "@/components/ui/file-upload";
import { db, storage } from "@/lib/firebase/config";

const initState = {
  title: "",
  description: "",
  content: "",
  file: null,
};

const BlogPostForm = ({ blog }) => {
  const [formData, setFormData] = useState(initState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (blog) {
      setFormData({ ...blog, file: null });
    }
  }, [blog]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContentChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      content: value,
    }));
  };

  const handleFileUpload = (files) => {
    if (files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        file: files[0],
      }));
    }
  };

  const handleSave = async () => {
    const { id, title, content, description, file } = formData;

    if (title.trim() === "" || content.trim() === "") {
      alert("Title and content cannot be empty.");
      setLoading(false);

      return;
    }

    setLoading(true);
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
            }
          );
        });
      } catch (error) {
        alert("Error uploading cover photo. Please try again.");

        return;
      }
    }

    try {
      if (id) {
        const projectDocRef = doc(db, "blogPosts", blog.id);
        alert("id");
        await updateDoc(projectDocRef, {
          title,
          content,
          coverPhotoUrl,
          description,
          updatedAt: new Date(),
        });
      } else {
        await addDoc(collection(db, "blogPosts"), {
          title,
          content,
          coverPhotoUrl,
          description,
          createdAt: new Date(),
        });
      }

      alert("Blog post saved successfully!");
      resetFormData();
    } catch (error) {
      alert("Error saving blog post. Please try again.");
    } finally {
      setLoading(false);
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

  const resetFormData = () => setFormData(initState);

  return (
    <div className="space-y-6">
      <Button
        fullWidth
        className="my-10"
        disabled={!formData?.id}
        onPress={resetFormData}
      >
        {formData?.id
          ? `Update Project: ${formData?.title} (Press to create a new one)`
          : `Create New Project`}
      </Button>
      <div>
        <Input
          label="Title"
          name="title"
          placeholder="Enter your blog post title"
          type="text"
          value={formData.title}
          onChange={handleInputChange}
        />
        <Input
          className="my-2"
          label="Description"
          name="description"
          placeholder="Enter your blog post summary"
          type="text"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 rounded-lg">
        <FileUpload
          accept="image/*"
          multiple={false}
          onChange={handleFileUpload}
        />
        {(formData?.coverPhotoUrl || formData?.file) && (
          <Image
            alt="Project Cover Photo"
            className="w-full h-auto rounded-b-2xl"
            height={500}
            src={
              typeof formData.file === "string"
                ? formData.file
                : formData.coverPhotoUrl
            }
            width={500}
          />
        )}
      </div>
      <div>
        <h2 className="mb-2">Content</h2>
        <ReactQuill
          className="h-80 mb-6"
          modules={modules}
          theme="snow"
          value={formData.content}
          onChange={handleContentChange}
        />
      </div>
      <Button
        className="w-full my-6"
        disabled={loading}
        isLoading={loading}
        size="md"
        onPress={handleSave}
      >
        {loading ? "Uploading..." : "Save Blog Post"}
      </Button>
    </div>
  );
};

export default BlogPostForm;
