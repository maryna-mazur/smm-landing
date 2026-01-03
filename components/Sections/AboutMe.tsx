import { Title } from "@/components/UI/Title";
import { montserrat } from "@/lib/fonts";
import Image from "next/image";

export const AboutMe = () => {
  return (
    <section
      id="about-me"
      className={`w-full min-h-screen flex flex-col items-center p-4 pb-[2vh] ${montserrat.className}`}
      style={{
        color: "var(--color-bg-primary)",
        fontSize: "4vh",
        background: "var(--color-accent)",
      }}
    >
      <div
        className="flex flex-col items-center"
        style={{ width: "clamp(250px, 90vw, 900px)" }}
      >
        <Title
          title="Про мене"
          subtitle="facts about me"
          color="var(--color-bg-primary)"
        />

        <p
          className="px-[7vw] mt-[6vh] text-[1rem]/[1.3rem] text-justify"
          style={{ color: `var(--color-bg-primary)` }}
        >
          Мій шлях розпочався з телебачення, продовжився у великому бізнесі, а з
          початку повномасштабної війни я занурилась у сферу маркетингу та PR.
          <br/> Навчалась контент-менеджменту на{" "}
          <strong>1+1, Люкс ФМ і в топів українського інфобізнесу</strong>.
          Сьогодні я веду бренди разом із командою в Києві та Черкасах,
          створюючи контент, який має зміст.
        </p>

        <div
          className="mt-[3vh] flex justify-between w-full gap-[3vw]"
          style={{ width: "clamp(250px, 90vw, 655px)" }}
        >
          <div className="relative w-[38vw] aspect-[4/3]">
            <Image
              src="/images/photo-2.JPG"
              alt="photo"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 38vw"
              style={{ objectFit: "cover", objectPosition: "0 -3vh" }}
            />
          </div>

          <div className="relative w-[57vw] aspect-[4/3]">
            <Image
              src="/images/lux-fm.JPG"
              alt="lux fm"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 57vw"
              style={{ objectFit: "cover", objectPosition: "0 -3vh" }}
            />
          </div>
        </div>

        <div
          className="mt-[2vh] flex justify-between w-full gap-[3vw]"
          style={{ width: "clamp(250px, 90vw, 655px)" }}
        >
          <div className="relative w-[57vw] aspect-[4/3]">
            <Image
              src="/images/photo-5.JPG"
              alt="photo"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 57vw"
              style={{ objectFit: "cover", objectPosition: "0 -1vh" }}
            />
          </div>

          <div className="relative w-[38vw] aspect-[4/3] ">
            <Image
              src="/images/1+1.JPG"
              alt="1+1"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 38vw"
              style={{ objectFit: "cover", objectPosition: "0 0.1vh" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
