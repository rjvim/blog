import Link from 'next/link';

export default function Header() {
  return (
    <h2 className="text-base font-semibold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8">
      <Link href="/">
        <a className="hover:underline tracking-wide uppercase flex items-center">
          {'< '} Home
        </a>
      </Link>
    </h2>
  );
}
