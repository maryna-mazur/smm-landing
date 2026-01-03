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
          borderColor: "var(--color-accent)",
        }}
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 aspect-[4/3]"
          style={{
            width: "clamp(120px, 20vw, 200px)",
            top: "-6.2vh",
          }}
        >
          <Image
            src="/images/IMG_1829.PNG"
            alt="coming soon"
            fill
            priority
            sizes="(max-width: 768px) 50vw, 22vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <ul
          className="mt-[3vh] list-none"
          style={{ fontSize: "1rem", color: "var(--color-accent" }}
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
