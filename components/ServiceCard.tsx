import Image from "next/image";
import { Service } from "@/types/service";
import { shantellSans } from "@/lib/fonts";

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
      className={`border-2 border-gray-200 rounded-[5vw] relative p-[5vw] ${
        isEven ? "ml-0 mr-auto" : "ml-auto mr-0"
      }`}
      style={{ maxWidth: "90vw" }}
    >
      <span className="flex justify-between items-start mb-4">
        <h3
          className={`w-full font-semibold ${isEven ? "text-left pr-[15vw]" : "text-right pl-[15vw]"}`}
          style={{ fontSize: "2.8vh" }}
        >
          {title}
        </h3>
        <div
          className="relative w-[32vw] aspect-[4/3]"
          style={{
            position: "absolute",
            top: "-2vh",
            right: isEven ? "-7vw" : "auto",
            left: isEven ? "auto" : "-7vw",
          }}
        >
          <Image
            src={icon}
            alt={title}
            sizes="(max-width: 768px) 90vw, 38vw)"
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
          className="mt-[3vh] mb-3 whitespace-pre-line text-gray-700"
          style={{ fontSize: "2vh" }}
        >
          {detail}
        </div>
      )}

      <p
        className={`${shantellSans.className} font-semibold text-blue-600 mt-[2vh] text-right pl-[15vw]`}
        style={{ fontSize: "2.2vh", color: "var(--color-accent)" }}
      >
        {price}
      </p>
    </div>
  );
};
