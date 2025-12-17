import { Title } from "@/components/UI/Title";
import { montserrat } from "@/lib/fonts";
import Image from "next/image";

export const AboutMe = () => {
  return (
    <section
      className={`w-full min-h-screen flex flex-col items-center mt-[4vh] p-4 ${montserrat.className}`}
      style={{
        color: "var(--color-bg-primary)",
        fontSize: "4vh",
        background: "var(--color-accent)",
      }}
    >
      <Title
        title="Про мене"
        subtitle="facts about me"
        color="var(--color-bg-primary)"
      />

      <p
        className="px-[7vw] mt-[6vh] text-[1.9vh]/[2.4vh] text-justify"
        style={{ color: `var(--color-bg-primary)` }}
      >
        Мій шлях розпочався з телебачення, продовжився у великому бізнесі, а з
        початку повномасштабної війни я занурилась у сферу маркетингу та PR.
        Навчалась контент-менеджменту на{" "}
        <strong>1+1, Люкс ФМ і в топів українського інфобізнесу</strong>.
        Сьогодні я веду бренди разом із командою в Києві та Черкасах, створюючи
        контент, який має зміст.
      </p>

      <div className="mt-[3vh] grid grid-cols-2 grid-rows-2 mx-auto w-fit place-items-center overflow-hidden">
        <Image
          src="/images/photo-2.JPG"
          alt="photo"
          width={170}
          height={210}
          priority
          style={{ objectFit: "cover" }}
        />

        <Image
          src="/images/lux-fm.JPG"
          alt="lux fm"
          width={180}
          height={150}
          priority
          style={{
            objectFit: "cover",
            objectPosition: "0 -3vh ",
          }}
        />
        <Image
          src="/images/photo-5.JPG"
          alt="photo"
          width={180}
          height={150}
          priority
          style={{
            objectFit: "cover",
            objectPosition: "0 -1vh ",
          }}
        />

        <Image
          src="/images/1+1.JPG"
          alt="1+1"
          width={170}
          height={210}
          priority
          style={{
            objectFit: "cover",
            objectPosition: "0 0.1vh",
          }}
        />
      </div>
    </section>
  );
};
