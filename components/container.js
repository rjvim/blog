export default function Container({ children }) {
  return (
    <div>
      <div className="mx-auto max-w-5xl">{children}</div>
    </div>
  );
}
