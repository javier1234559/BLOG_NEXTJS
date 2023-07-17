import Feed from "../components/Feed"
import getPostMetadata ,{ Post } from "../libs/getPostFromFile"

export const generateStaticParams = async () => {
  const posts = await getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default async function HomePage() {
  const posts: Post[] = await getPostMetadata();

  return (
    <>
      <div className="flex flex-col w-[100%] items-center justify-center">
        <h1 className="text-4xl mt-10 text-white">Hello 👋, Next.js!</h1>
        <Feed posts={posts}/>
      </div>
    </>
  )
}