import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import prism from 'remark-prism';

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(remarkGfm)
    // .use(remarkRehype)
    .use(prism)
    .process(markdown);
  return result.toString();
}
