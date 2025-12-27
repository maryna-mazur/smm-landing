import Image from "next/image";

export const ComingSoon = () => {
  const text = [
    "🎬 Insta Days — формат зйомок, які відчуваються як подія",
    "🤝 Нетворкінг майстермайнди для digital-спеціалістів та брендів",
  ];

  return (
    <section
      className="flex flex-col items-center w-full"
      style={{ backgroundColor: "var(--color-bg-primary" }}
    >
      <div
        className={`mx-auto my-[5vh] border-3 rounded-[5vw] relative p-[5vw] relative`}
        style={{
          maxWidth: "90vw",
          borderColor: "var(--color-accent",
        }}
      >
        <Image
          src="/images/IMG_1829.PNG"
          alt="coming soon"
          width={140}
          height={140}
          style={{
            objectFit: "cover",
            position: "absolute",
            top: "-50%",
            left: "50%",
            transform: "translate(-50%, 25%)",
          }}
        />

        <ul
          className="mt-2 list-none"
          style={{ fontSize: "2.2vh", color: "var(--color-accent" }}
        >
          {text.map((item, i) => (
            <li className="mt-[2vh]" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
