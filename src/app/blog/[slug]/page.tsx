import Markdown from "markdown-to-jsx";
import getPostMetadata , { Post } from '../../../libs/getPostFromFile';
import getPostContent from '../../../libs/getPostContent';

export const generateStaticParams = async () => {
  const posts = await getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};


export default async function DetailPost(props :any){
  const slug = props.params.slug;
  const post =  await getPostContent(slug);

  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
} 