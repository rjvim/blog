import Avatar from '../components/avatar';
import DateFormatter from '../components/date-formatter';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <div className="mx-auto">
      <PostTitle>{title}</PostTitle>
      <div className="border-b">
        <div className="text-lg mb-6 text-gray-500">
          Published on <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
}
