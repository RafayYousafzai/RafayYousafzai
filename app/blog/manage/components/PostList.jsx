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

const PostList = () => {
  const { blogs } = useFirebase();

  const [loading, setLoading] = useState(false);

  const handleDelete = async (postId) => {
    try {
      setLoading(true);
      await deleteDoc(doc(db, "blogPosts", postId));
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
        <TableColumn>Description</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>
        {blogs.map((post) => (
          <TableRow key={post?.id}>
            <TableCell>
              <Image height={50} src={post?.coverPhotoUrl} width={50} />
            </TableCell>
            <TableCell> {post?.title}</TableCell>
            <TableCell> {post?.description}</TableCell>
            <TableCell>
              <Button
                className="ml-4"
                color="danger"
                onClick={() => handleDelete(post?.id)}
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
{
  /* <div
dangerouslySetInnerHTML={{ __html: post.content }}
className="prose max-w-none text-gray-700"
/> */
}
