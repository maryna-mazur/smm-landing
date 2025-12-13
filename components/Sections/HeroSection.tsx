import Image from "next/image";
import { Shantell_Sans } from "next/font/google";

const shantellSans = Shantell_Sans({
  weight: ["400", "700"],
  variable: "--font-shantell-Sans",
  subsets: ["latin"],
});

const accentColor = "#590401";
const bgColor = "#FEFFF5";

export const HeroSection = () => {
  return (
    <section
      className="w-full h-full flex flex-col justify-center items-center mt-3 p-4"
      style={{ backgroundColor: bgColor }}
    >
      <h1
        className={`w-full h-[10dvh] pl-[6dvw] text-4xl uppercase font-bold m-0`}
        style={{ fontFamily: "initial", color: accentColor }}
      >
        Надія <br />
        <em>— Грабовська</em>
      </h1>

      <p
        className={`flex justify-end w-full mt-[2dvh] mr-[7dvw] text-wrap ${shantellSans.className}`}
        style={{ fontWeight: 600, fontSize: "2vh" }}
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
          height: "48dvh",
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
          lineHeight: "2.5vh",
          marginTop: "2vh",
          fontWeight: 500,
          padding: "0 4dvw",
        }}
      >
        Я допомагаю брендам звучати справжньо в соціальних мережах. Для мене
        важливо не просто вести сторінку чи створювати контент, а передавати
        атмосферу, сенси й людей, які стоять за брендом. Я бачу кожен проєкт як
        історію, якій хочеться довіряти — і саме тоді соцмережі працюють на
        бренд
      </p>
      <button
        className={`uppercase`}
        style={{
          marginTop: "2vh",
          padding: "2.6dvw",
          backgroundColor: accentColor,
          color: bgColor,
        }}
      >
        Звʼязатися зі мною
      </button>
    </section>
  );
};
