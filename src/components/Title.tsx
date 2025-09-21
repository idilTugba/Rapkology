import clsx from "clsx";

export default function Title({
  children,
  classname,
}: Readonly<{
  children: React.ReactNode;
  classname?: string;
}>) {
  return (
    <h2
      className={clsx(
        "relative mb-10 text-4xl font-bold tracking-tight sm:mb-[75px] md:text-5xl",
        classname
      )}
    >
      {children}
    </h2>
  );
}
