import markdownStyles from './markdown-styles.module.css';

export default function PostBody({ content }) {
  return (
    <div className="bg-gray-50 py-4 rounded-md">
      <div className="prose lg:prose-2xl mx-auto prose-pre:text-base prose-code:text-base lg:prose-pre:text-base lg:prose-code:text-base">
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
