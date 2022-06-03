export default function Container({ children }) {
  return (
    <div>
      <div className="px-4 md:px-0 mx-auto max-w-5xl">{children}</div>
    </div>
  );
}
