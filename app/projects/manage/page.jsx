"use client";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import FileUpload from "@/components/ui/file-upload";
import { db, storage } from "@/lib/firebase/config";

export default function Component() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    github: "",
    preview: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (files) => {
    if (files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        file: files[0],
      }));
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const { title, description, github, preview, file } = formData;

    if (title.trim() === "" || description.trim() === "") {
      alert("Title and description cannot be empty.");

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
            },
          );
        });
      } catch (error) {
        alert("Error uploading cover photo. Please try again.");
        setLoading(false);

        return;
      }
    }

    try {
      // Save blog post content to Firestore
      await addDoc(collection(db, "projects"), {
        title,
        description,
        github,
        preview,
        coverPhotoUrl,
        createdAt: new Date(),
      });

      alert("Project post saved successfully!");
      setFormData({
        title: "",
        description: "",
        github: "",
        preview: "",
        file: null,
      });
    } catch (error) {
      alert("Error saving project post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-20">
      <h1 className="text-2xl font-semibold">Upload Project</h1>
      <form className="w-full" onSubmit={handleSave}>
        <div className="space-y-4 w-full">
          <Input
            fullWidth
            required
            id="title"
            placeholder="Enter document title"
            value={formData.title}
            onChange={handleInputChange}
          />

          <Textarea
            required
            id="description"
            placeholder="Enter document description"
            value={formData.description}
            onChange={handleInputChange}
          />

          <Input
            fullWidth
            required
            id="github"
            placeholder="https://github.com/..."
            type="url"
            value={formData.github}
            onChange={handleInputChange}
          />

          <Input
            fullWidth
            required
            id="preview"
            placeholder="https://..."
            type="url"
            value={formData.preview}
            onChange={handleInputChange}
          />

          <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 rounded-lg">
            <FileUpload
              accept="image/*"
              multiple={false}
              onChange={handleFileUpload}
            />
          </div>
        </div>
        <div>
          <Button
            className="w-full my-6"
            disabled={loading}
            size="md"
            type="submit"
          >
            {loading ? "Uploading..." : "Upload Document"}
          </Button>
        </div>
      </form>
    </div>
  );
}
