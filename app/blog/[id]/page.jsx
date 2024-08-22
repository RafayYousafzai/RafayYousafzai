"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

import { useFirebase } from "@/context/FirebaseContext";

export default function Component(params) {
  const { blogs } = useFirebase();

  const blog = blogs.filter((blog) => blog.id === params.params.id)[0];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 ">
      <Link
        className="inline-flex items-center text-sm  hover:text-gray-700 mb-6"
        href="/blog"
      >
        <IconArrowLeft className="mr-2 h-4 w-4" />
        Back to all posts
      </Link>
      <article className="space-y-8 max-w-3xl mb-20 min-h-screen">
        <div className="w-full flex justify-center  ">
          <Image
            alt="Blog post cover image"
            className=" w-full  h-auto object-cover rounded-lg"
            height={200}
            src={blog?.coverPhotoUrl}
            width={200}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">{blog?.title}</h1>
          <p className="text-lg ">{blog?.description}</p>
        </div>

        <Divider className="my-2" />

        <div
          dangerouslySetInnerHTML={{ __html: blog?.content }}
          className="prose  dark:prose-invert max-w-none text-left"
        />
      </article>
    </div>
  );
}
