import BlogDetails from './blogDetails';

// This function dynamically sets the meta tags using server-side data fetching
export async function generateMetadata({ params }) {
  const {blogDetails} = params;
  
  // Fetch the blog post data based on the slug
  const res = await fetch(`http://localhost:3000/blogData.json`);
  const data = await res.json();
  const post = data.posts.find((post) => post.slug === blogDetails);

  return {
    title: post ? post.title : 'Blog Post 1',
    description: post ? post.content.slice(0, 150) : 'Blog post description',
  };
}

// The BlogPage component is a client component, so we just render it here
export default function Page() {
  return <BlogDetails/>;
}