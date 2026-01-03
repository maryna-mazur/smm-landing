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
      className="uppercase outline-none hover:cursor-pointer hover:opacity-80"
      style={{
        marginTop: "2vh",
        padding: "1.3rem",
        backgroundColor: "var(--color-accent)",
        color: "var(--color-bg-primary)",
        textDecoration: "none",
        borderRadius: "1rem",
        height: "2.8rem",
        maxHeight: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1rem",
      }}
      target="_blank"
      href={href}
    >
      {content}
    </Link>
  );
};
