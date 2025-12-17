import Image from "next/image";
import { ContactLink } from "@/components/UI/ContactLink";
import { shantellSans } from "@/lib/fonts";


export const HeroSection = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center mt-[4vh] p-4"
      style={{ backgroundColor: "var(--color-bg-primary" }}
    >
      <h1
        className={`w-full h-[10vh] pl-[6vw] uppercase font-bold m-0`}
        style={{ fontFamily: "initial", color: "var(--color-accent)", fontSize: "4vh" }}
      >
        Надія <br />
        <em>— Грабовська</em>
      </h1>

      <p
        className={`flex justify-end w-full mt-[5px] mr-[7vw] text-wrap ${shantellSans.className}`}
        style={{ fontWeight: 600, fontSize: "1.8vh" }}
      >
        SMM-менеджерка | Content Creator | <br />
        UGC проєктів, у яких зміст має значення
      </p>

      <Image
        src="/images/photo-4.JPEG"
        alt="SMM Specialist Profile Photo"
        width={600}
        height={720}
        style={{
          height: "50dvh",
          width: "100%",
          objectFit: "cover",
          marginTop: "2vh",
        }}
        priority
      />

      <p
        className={`text-center`}
        style={{
          fontSize: "2vh",
          fontFamily: "inherit",
          lineHeight: "2.3vh",
          marginTop: "2vh",
          fontWeight: 500,
          padding: "0 4vw",
        }}
      >
        Я допомагаю брендам звучати справжньо в соціальних мережах. Для мене
        важливо не просто вести сторінку чи створювати контент, а передавати
        атмосферу, сенси й людей, які стоять за брендом. Я бачу кожен проєкт як
        історію, якій хочеться довіряти — і саме тоді соцмережі працюють на
        бренд
      </p>
      <ContactLink content="Звʼязатися" />
    </section>
  );
};
