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
    <section className="relative mt-[4dvh]">
      <h2
        className={`${montserrat.className} w-full uppercase font-bold`}
        style={{
          color: color,
          fontSize: "4vh",
        }}
      >
        {title}
      </h2>
      <p
        className={`${comforter.className} absolute bottom-[-4.5dvh] right-[-9dvw]`}
        style={{ color }}
      >
        {subtitle}
      </p>
    </section>
  );
};
