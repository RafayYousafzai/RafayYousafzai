"use client";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { useState } from "react";

export default function Component() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div>
        <div>Upload Document</div>
      </div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="space-y-4 w-full">
          <Input
            fullWidth
            required
            id="title"
            placeholder="Enter document title"
          />

          <Textarea
            required
            id="description"
            placeholder="Enter document description"
          />

          <Input
            fullWidth
            required
            accept="image/*"
            id="image"
            type="file"
            onChange={handleImageChange}
          />

          <Input
            fullWidth
            required
            id="github"
            placeholder="https://github.com/..."
            type="url"
          />

          <Input
            fullWidth
            required
            id="preview"
            placeholder="https://..."
            type="url"
          />
        </div>
        <div>
          <Button className="w-full" type="submit">
            Upload Document
          </Button>
        </div>
      </form>
    </div>
  );
}
