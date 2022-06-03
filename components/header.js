import Link from 'next/link';
import { XCircleIcon, ArrowLeftIcon } from '@heroicons/react/solid';

export default function Header() {
  return (
    <h2 className="text-base text-gray-500 font-normal tracking-tight md:tracking-tighter leading-tight mb-8 mt-8">
      <Link href="/">
        <a className="hover:underline tracking-wide uppercase flex items-center">
          <ArrowLeftIcon className="w-4 h-4" />
          <span className="ml-2">Home</span>
        </a>
      </Link>
    </h2>
  );
}
