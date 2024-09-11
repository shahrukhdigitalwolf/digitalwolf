'use client'
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function BlogPage() {
  const slug = usePathname();
  const [post, setPost] = useState(null);
    
  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/blogData.json`);
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
    <>
    <Head>
        <title>My Blog</title>
        <meta name="description" content={'Blog post'} />
      </Head>
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
    </>
  );
}

export default BlogPage;