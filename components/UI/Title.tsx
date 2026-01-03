import { comforter, montserrat } from "@/lib/fonts";

export const Title = ({
  title,
  subtitle,
  color,
}: {
  title: string;
  subtitle: string;
  color: string;
}) => {
  return (
    <section className="relative mt-[1.5rem]">
      <h2
        className={`${montserrat.className} w-full uppercase font-bold`}
        style={{
          color: color,
          fontSize: "2rem",
        }}
      >
        {title}
      </h2>
      <p
        className={`${comforter.className} absolute bottom-[-2.2rem] right-[-1.9rem]`}
        style={{ color, fontSize: "2rem" }}
      >
        {subtitle}
      </p>
    </section>
  );
};
