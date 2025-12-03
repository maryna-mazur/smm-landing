import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center mt-3 p-4 bg-stone-50">
      <h1 className="text-4xl uppercase font-bold">
        Надія <br />
        <em>— Грабовська</em>
      </h1>

      <h3 className="flex justify-end w-full mt-2 text-sm/5">
        SMM-менеджерка | Content Creator | <br />
        UGC проєктів, у яких зміст має значення
      </h3>

      <Image
        src="/images/photo-4.JPEG"
        alt="SMM Specialist Profile Photo"
        width={600}
        height={720}
        style={{
          height: "60dvh",
          width: "auto",
        }}
        priority
        className="mt-4"
      />

      <p className="text-center text-sm/4 mt-3">
        Я допомагаю брендам звучати справжньо в соціальних мережах. Для мене
        важливо не просто вести сторінку чи створювати контент, а передавати
        атмосферу, сенси й людей, які стоять за брендом. Я бачу кожен проєкт як
        історію, якій хочеться довіряти — і саме тоді соцмережі працюють на
        бренд
      </p>
    </section>
  );
};
