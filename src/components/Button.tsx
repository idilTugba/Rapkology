export default function Button({
  text,
  children,
  href,
  onClick,
}: Readonly<{
  text?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}>) {
  if (href) {
    return (
      <div className="relative mt-5 inline-block">
        <span
          aria-hidden
          className="absolute inset-0 block translate-x-2 translate-y-2 skew-x-[-6deg] bg-black"
        />
        <a
          href={href}
          className="bg-rkyellow-500 relative z-10 inline-block skew-x-[-6deg] px-6 py-3 font-extrabold text-black"
        >
          <span className="inline-block skew-x-[6deg]">{text}</span>
        </a>
      </div>
    );
  }
  return (
    <button
      onClick={onClick}
      className="relative z-10 inline-block skew-x-[-6deg] bg-white px-6 py-3 font-extrabold text-black"
    >
      {children || <span className="inline-block skew-x-[6deg]">{text}</span>}
    </button>
  );
}
