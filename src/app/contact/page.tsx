
import Markdown from "markdown-to-jsx";
import getPostContent from '../../libs/getPostContent';


export default async function AboutPage(props: any) {
  const nameFile = "contact";
  const post = await getPostContent(nameFile);

  return (
    <div>
      <div className="m-12 text-center">
        <h1 className="text-3xl md:text-4xl text-white pb-3 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>
      <article className="prose dark:prose-invert lg:prose-xl prose-p:text-gray-300 prose-img:w-full px-4 mx-auto ">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}