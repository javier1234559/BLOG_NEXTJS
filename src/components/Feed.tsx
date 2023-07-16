import Link from 'next/link';
import React from 'react';
import getPostMetadata ,{Post} from "../libs/getPostFromFile"


export const generateStaticParams = async () => {
  const posts = await getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};


const Feed = async () => {
  const posts = await getPostMetadata();
  // console.log(posts);

  return (
    posts.map((post:Post) => {
      {console.log(post)}
      return <>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-[300px] mt-6 p-4 border-4 border-black'>
            <Link href={`blog/${post.slug}`}>
              <h1 className='text-blue-300'>{post.title}</h1>
            </Link>
            <small >{post.date}</small>
        </div>
      </div>
      </>
    })
  )
}

export default Feed