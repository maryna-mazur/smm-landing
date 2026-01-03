import Image from "next/image";
import { Service } from "@/types/service";
import { shantellSans } from "@/lib/fonts";
import { ContactLink } from "@/components/UI/ContactLink";

export const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const { title, icon, price, detail } = service;
  const isEven = index % 2 === 0;

  return (
    <div
      className={`border-2 border-gray-200 rounded-[5vw] relative p-[3vw] ${
        isEven ? "ml-0 mr-auto" : "ml-auto mr-0"
      }`}
      style={{ width: "clamp(200px, 90vw, 650px)" }}
    >
      <span className="flex justify-between items-start mb-4">
        <h3
          className={`w-full font-semibold ${isEven ? "text-left pr-[18vw]" : "text-right pl-[18vw]"}`}
          style={{ fontSize: "1.3rem" }}
        >
          {title}
        </h3>
        <div
          className="relative aspect-[4/3]"
          style={{
            width: "clamp(100px, 19vw, 200px)",
            position: "absolute",
            top: "-1.8rem",
            right: isEven ? "-2vw" : "auto",
            left: isEven ? "auto" : "-2vw",
          }}
        >
          <Image
            src={icon}
            alt={title}
            sizes="(max-width: 768px) 40vw, 22vw"
            fill
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </span>

      {detail && (
        <div
          className={`mt-[1.1rem] mb-3 whitespace-pre-line text-gray-700 ${isEven ? "text-left pr-[5vw]" : "text-right pl-[5vw]"}`}
          style={{ fontSize: "1rem" }}
        >
          {detail}
        </div>
      )}

      <p
        className={`${shantellSans.className} font-semibold text-blue-600 mt-[3vh] text-right pl-[15vw]`}
        style={{ fontSize: "1.2rem", color: "var(--color-accent)" }}
      >
        {price}
      </p>

      {title !== "Ведення проєкту під ключ" && (
        <ContactLink content="Хочу замовити" href="https://t.me/ms_grabovska" />
      )}
    </div>
  );
};
