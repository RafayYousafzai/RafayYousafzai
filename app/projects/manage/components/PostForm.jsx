"use client";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { useEffect, useState } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Image from "next/image";

import FileUpload from "@/components/ui/file-upload";
import { db, storage } from "@/lib/firebase/config";

const initState = {
  title: "",
  description: "",
  github: "",
  preview: "",
  file: null,
};

export default function PostForm({ project }) {
  const [formData, setFormData] = useState(initState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (project) {
      setFormData({ ...project, file: null });
    }
  }, [project]);

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
    const { id, title, description, github, preview, file } = formData;

    if (!title.trim() || !description.trim()) {
      alert("Title and description cannot be empty.");

      return;
    }

    setLoading(true);
    let coverPhotoUrl = formData.coverPhotoUrl || "";

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
      if (id) {
        const projectDocRef = doc(db, "projects", id);

        await updateDoc(projectDocRef, {
          title,
          description,
          github,
          preview,
          coverPhotoUrl,
          updatedAt: new Date(),
        });
      } else {
        await addDoc(collection(db, "projects"), {
          title,
          description,
          github,
          preview,
          coverPhotoUrl,
          createdAt: new Date(),
        });
      }

      alert("Project post saved successfully!");
      resetFormData();
    } catch (error) {
      alert("Error saving project post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetFormData = () => setFormData(initState);

  return (
    <div className="w-full max-w-2xl mx-auto mb-20">
      <h1 className="text-2xl font-semibold">Upload Project</h1>
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

      <form className="w-full" onSubmit={handleSave}>
        <div className="space-y-4 w-full">
          <Input
            fullWidth
            required
            id="title"
            placeholder="Enter project title"
            value={formData.title}
            onChange={handleInputChange}
          />

          <Textarea
            required
            id="description"
            placeholder="Enter project description"
            value={formData.description}
            onChange={handleInputChange}
          />

          <Input
            fullWidth
            id="github"
            placeholder="https://github.com/..."
            type="url"
            value={formData.github}
            onChange={handleInputChange}
          />

          <Input
            fullWidth
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
        </div>
        <div>
          <Button
            className="w-full my-6"
            disabled={loading}
            size="md"
            type="submit"
          >
            {loading ? "Uploading..." : "Upload Project"}
          </Button>
        </div>
      </form>
    </div>
  );
}
