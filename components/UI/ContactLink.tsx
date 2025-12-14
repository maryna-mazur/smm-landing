export const ContactLink = ({ content }: { content: string }) => {
  return (
    <a
      className="uppercase"
      style={{
        marginTop: "2vh",
        padding: "2.6dvw",
        backgroundColor: "var(--color-accent)",
        color: "var(--color-bg-primary)",
        textDecoration: "none",
      }}
      target="_blank"
      href="https://www.instagram.com/ms.grabovska/"
    >
      {content}
    </a>
  );
};
