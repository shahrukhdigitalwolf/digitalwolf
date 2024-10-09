// app/blogs/[slug]/BlogPage.js
'use client'; // This makes the component a client component

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function BlogDetails() {
  const slug = usePathname(); // Get the current path
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`http://localhost:3000/blogData.json`);
      const data = await res.json();
      const foundPost = data.posts.find((post) => `/blogs/${post.slug}` === slug);
      setPost(foundPost);
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
