
import fs from "fs";
import matter from "gray-matter";
import { format }  from 'date-fns'

export interface Post {
  title: string,
  date: string,
  subtitle: string,
  slug: string,
}

export default async function getPostMetadata() : Promise<Post[]>{
  const nameFolter = "blogposts";
  const files = fs.readdirSync(`public/${nameFolter}`); //returns name of files in directory
  const markdownFiles = files.filter((file) => file.endsWith('.md')); //filter only markdown files
  
  const posts = markdownFiles.map((filename) => {
    const file = fs.readFileSync(`public/${nameFolter}/${filename}`, 'utf-8'); 
    const matterResult = matter(file);
    const slug = filename.replace('.md', '');  // set name file as slug
    // console.log(matterResult.data.date);
    // const formattedDate = format(matterResult.data.date, 'dd/MM/yyyy');

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle:matterResult.data.subtitle,
      slug,
    };
  });
  
  return posts;
};
