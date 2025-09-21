export default function Title2({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) {
  return (
    <h4 className="font-saria-cond mb-4 text-2xl font-extrabold tracking-tighter text-white sm:text-4xl">
      {children}
    </h4>
  );
}
