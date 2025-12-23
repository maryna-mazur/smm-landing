import Link from "next/link";

export const ContactLink = ({
  content,
  href,
}: {
  content: string;
  href: string;
}) => {
  return (
    <Link
      className="uppercase"
      style={{
        marginTop: "2vh",
        padding: "2.6dvw",
        backgroundColor: "var(--color-accent)",
        color: "var(--color-bg-primary)",
        textDecoration: "none",
      }}
      target="_blank"
      href={href}
    >
      {content}
    </Link>
  );
};
