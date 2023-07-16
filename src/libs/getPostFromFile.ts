
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

export interface Post {
  title: string,
  date: string,
  content: string,
  slug: string,
}

export default async function getPostMetadata() : Promise<Post[]>{
  const nameFolter = "blogposts";
  const files = fs.readdirSync(`src/${nameFolter}`); //returns name of files in directory
  const markdownFiles = files.filter((file) => file.endsWith('.md')); //filter only markdown files
  
  const posts = markdownFiles.map((filename) => {
    const file = fs.readFileSync(`src/${nameFolter}/${filename}`, 'utf-8'); 
    const { data, content } = matter(file);
    const slug = filename.replace('.md', '');  // set name file as slug

    return {
      title: data.title,
      date: data.date,
      content,
      slug,
    };
  });
  
  return posts;
};
