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
      <div className="m-12 text-center">
        <h1 className="text-3xl md:text-4xl text-white pb-3 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      {/* <div className=" flex justify-center mx-auto max-w-[90%]">  neu dung flex se bi cat , nen dung mx-auto va px-8 de tao space  */}
        <article className="prose dark:prose-invert lg:prose-xl prose-p:text-gray-300 prose-img:w-full px-4 mx-auto ">
          <Markdown>{post.content}</Markdown>
        </article>
      {/* </div> */}
    </div>
  )
} 