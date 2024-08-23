"use client";

import React, { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

import { db } from "@/lib/firebase/config";
import { useFirebase } from "@/context/FirebaseContext";

const PostList = ({ onEdit }) => {
  const { projects } = useFirebase();

  const [loading, setLoading] = useState(false);

  const handleDelete = async (postId) => {
    const isConfirmed = confirm(
      "Are you sure you want to delete this post? This action cannot be undone.",
    );

    if (!isConfirmed) return;

    try {
      setLoading(true);
      await deleteDoc(doc(db, "blogPosts", postId));
      alert("Post deleted successfully!");
    } catch (error) {
      alert("Error deleting post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Table className="mt-10">
      <TableHeader>
        <TableColumn>Image</TableColumn>
        <TableColumn>Title</TableColumn>
        <TableColumn> </TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>
        {projects.map((post) => (
          <TableRow key={post?.id}>
            <TableCell>
              <Image
                alt="Post Cover"
                height={50}
                src={post?.coverPhotoUrl}
                width={50}
              />
            </TableCell>
            <TableCell>{post?.title}</TableCell>
            <TableCell> </TableCell>
            <TableCell>
              <Button
                className="ml-4"
                color="warning"
                onPress={() => onEdit(post)}
              >
                Edit
              </Button>
              <Button
                className="ml-4"
                color="danger"
                onPress={() => handleDelete(post?.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PostList;
