import matter from "gray-matter";
import fs from "fs";

export default async function getPostContent(slug: string) {
  const folder = "blogposts";
  const file = `public/${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};
