import Link from 'next/link';
import React from 'react';
import { Post } from "../libs/getPostFromFile"

interface FeedProps {
  posts: Post[];
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
  console.log(posts[0]);
  return (<>
    {posts.map((post: Post) => {
      return <div key={post.slug} className="flex bg-transparent shadow-lg rounded-lg mx-4 md:mx-auto my-8  text-white border border-blue-200 ">
        <div className="flex flex-1 items-start px-4 py-6 max-w-[800px] md:max-w-2xl md:w-[800px] w-full ">
          <div className="">
            <div className="flex items-center justify-between">
              <Link href={`blog/${post.slug}`}>
                <h2 className="text-lg font-semibold -mt-1">{post.title}</h2>
              </ Link >
            </div>
            <p className="">{post.date}</p>
            <p className="mt-3 text-sm">
              {post.subtitle}
            </p>
          </div>
        </div>
      </div>
    })}
  </>)
}

export default Feed