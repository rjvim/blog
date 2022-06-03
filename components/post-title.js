export default function PostTitle({ children }) {
  return (
    <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight md:leading-none mb-4 text-center md:text-left mx-auto">
      {children}
    </h1>
  );
}
