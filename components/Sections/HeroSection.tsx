"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ContactLink } from "@/components/UI/ContactLink";
import { libertinusMath, montserrat } from "@/lib/fonts";
import Link from "next/link";

const navigationItems = [
  { id: 1, label: "Про мене", href: "#about-me" },
  { id: 2, label: "Мої послуги", href: "#my-services" },
  { id: 3, label: "Контакти", href: "#contacts" },
];

export const HeroSection = () => {
  const [screenSize, setScreenSize] = useState("mobile");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScreenSize("mobile");
      } else if (width >= 640 && width < 768) {
        setScreenSize("tablet");
      } else if (width >= 768 && width < 1024) {
        setScreenSize("desktop");
      } else if (width >= 1024) {
        setScreenSize("largeDesktop");
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getImagePosition = () => {
    switch (screenSize) {
      case "mobile":
        return "center 75%";
      case "tablet":
        return "center 65%";
      case "desktop":
        return "center 60%";
      case "largeDesktop":
        return "center 40%";
      default:
        return "center center";
    }
  };

  const handleScroll = (e, targetId: string) => {
    e.preventDefault();

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center py-[0.8rem] px-4"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      {screenSize === "mobile" ? (
        <div className="flex flex-col items-center">
          <h1
            className={`${libertinusMath.className} w-full h-[3.5rem] pl-[6vw] uppercase font-bold m-0`}
            style={{
              color: "var(--color-accent)",
              fontSize: "2.2rem",
            }}
          >
            Надія <br />
            <em>— Грабовська</em>
          </h1>

          <p
            className={`flex justify-end w-full mt-[2rem] mr-[7vw] text-wrap ${montserrat.className}`}
            style={{ fontWeight: 600, fontSize: "0.7rem" }}
          >
            SMM-менеджерка | Content Creator | <br />
            UGC проєктів, у яких зміст має значення
          </p>

          <Image
            src="/images/photo-3.JPG"
            alt="SMM Specialist Profile Photo"
            width={600}
            height={720}
            style={{
              height: "60vh",
              width: "100%",
              objectFit: "cover",
              objectPosition: getImagePosition(),
              marginTop: "0.8rem",
            }}
            priority
          />

          <p
            className={`text-center`}
            style={{
              fontSize: "1rem",
              fontFamily: "inherit",
              lineHeight: "18px",
              marginTop: "2vh",
              fontWeight: 400,
              padding: "0 4vw",
            }}
          >
            Я допомагаю брендам звучати справжньо в соціальних мережах. Для мене
            важливо не просто вести сторінку чи створювати контент, а{" "}
            <span
              className={`${libertinusMath.className} uppercase font-bold`}
              style={{
                color: "var(--color-accent)",
                fontStyle: "italic",
              }}
            >
              передавати атмосферу, сенси й людей, які стоять за брендом
            </span>
            . <br />{" "}
            <div
              className={`mt-[0.8rem] ${montserrat.className}`}
              style={{ fontWeight: 600, fontSize: "0.8rem" }}
            >
              Я бачу кожен проєкт як історію, якій хочеться довіряти — і саме
              тоді соцмережі працюють на бренд
            </div>
          </p>
          <ContactLink content="Звʼязатися" href="https://t.me/ms_grabovska" />
        </div>
      ) : (
        <div className="flex flex-col items-center w-full">
          <nav className="w-full h-[4.2rem] flex justify-between items-center px-[4vw]">
            <h1
              className={`${libertinusMath.className} pl-[6vw] uppercase font-bold m-0`}
              style={{
                color: "var(--color-accent)",
                fontSize: '1.8rem',
              }}
            >
              Надія <br />
              <em>— Грабовська</em>
            </h1>
            <ul
              className="flex justify-evenly items-center gap-[4vw] list-none font-bold"
              style={{
                fontSize: `1.1rem`,
              }}
            >
              {navigationItems.map((item) => (
                <li key={item.id} className="py-[1rem]">
                  <Link
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href.slice(1))}
                    className="cursor-pointer hover:opacity-50 transition-opacity"
                    style={{
                      color: "var(--color-text-color)",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-full px-[4vw]">
            <div
              className="relative mt-[1rem] relative w-full aspect-[5/3] rounded-[3vw] overflow-hidden"
              style={{
                height: "65vh",
              }}
            >
              <Image
                src="/images/photo-3.webp"
                alt="SMM Specialist Profile Photo"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 92vw"
                style={{
                  objectFit: "cover",
                  objectPosition: getImagePosition(),
                }}
              />

              <p
                className={`absolute top-[1rem] left-[40px] flex w-full text-wrap ${montserrat.className}`}
                style={{
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                SMM-менеджерка | Content Creator | <br />
                UGC проєктів, у яких зміст має значення
              </p>
            </div>
          </div>

          <p
            className={`text-center`}
            style={{
              fontSize: "1.2rem",
              fontFamily: "inherit",
              lineHeight: "1.4rem",
              marginTop: "1rem",
              fontWeight: 400,
              padding: "0 8vw",
            }}
          >
            Я допомагаю брендам звучати справжньо в соціальних мережах. Для мене
            важливо не просто вести сторінку чи створювати контент,{" "}
            <span
              className={`${libertinusMath.className} uppercase font-bold`}
              style={{
                color: "var(--color-accent)",
                fontStyle: "italic",
              }}
            >
              передавати атмосферу, сенси й людей, які стоять за брендом.
            </span>{" "}
            <br />{" "}
            <div
              className={`mt-[0.8rem] ${montserrat.className}`}
              style={{ fontWeight: 600, fontSize: "1.2rem" }}
            >
              Я бачу кожен проєкт як історію, якій хочеться довіряти — і саме
              тоді соцмережі працюють на бренд
            </div>
          </p>
          <ContactLink content="Звʼязатися" href="https://t.me/ms_grabovska" />
        </div>
      )}
    </section>
  );
};
