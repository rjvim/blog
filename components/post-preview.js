import Avatar from '../components/avatar';
import DateFormatter from '../components/date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="hover:bg-gray-100 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 relative  py-5 px-4 rounded-lg cursor-pointer border border-red-500">
        {/* <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div> */}
        <h3 className="text-3xl mb-3 leading-snug">{title}</h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
        {/* <Avatar name={author.name} picture={author.picture} /> */}
      </div>
    </Link>
  );
}
