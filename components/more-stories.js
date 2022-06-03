import PostPreview from '../components/post-preview';
import Link from 'next/link';
import DateFormatter from '../components/date-formatter';

// export default function MoreStories({ posts }) {
//   return (
//     <div className="divide-y divide-gray-300 space-y-4  py-8">
//       {posts.map((post) => (
//         <PostPreview
//           key={post.slug}
//           title={post.title}
//           coverImage={post.coverImage}
//           date={post.date}
//           author={post.author}
//           slug={post.slug}
//           excerpt={post.excerpt}
//         />
//       ))}
//     </div>
//   );
// }

export default function MoreStories({ posts }) {
  return (
    <ul role="list" className="space-y-4">
      {posts.map((post) => (
        <li
          key={post.slug}
          className="relative bg-white py-5 px-4 hover:bg-gray-100 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-600 rounded-lg border border-gray-200"
        >
          <div className="flex justify-between space-x-3">
            <div className="min-w-0 flex-1">
              <Link href={`/blog/${post.slug}`}>
                <a className="block focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {post.title}
                  </p>
                </a>
              </Link>
            </div>
            <time
              dateTime={post.date}
              className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
            >
              <DateFormatter dateString={post.date} />
            </time>
          </div>
        </li>
      ))}
    </ul>
  );
}
