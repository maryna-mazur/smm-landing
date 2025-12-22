import Link from "next/link";
import { montserrat } from "@/lib/fonts";

export const ContactInfo = () => {
  const socialMedia = [
    {
      title: "Facebook",
      href: "https://www.facebook.com/nadiia.hrabovska",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24">
          <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
        </svg>
      ),
    },
    {
      title: "Telegram",
      href: "https://t.me/ms_grabovska",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"></path>
        </svg>
      ),
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/ms.grabovska/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24">
          <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-16 mb-[4vh] px-4">

      <div
        className="w-full h-[1px] mb-[2vh] opacity-20"
        style={{ backgroundColor: "var(--color-accent)" }}
      />

      <section
        className={`flex flex-col items-center justify-center space-y-8 ${montserrat.className}`}
      >
        <h4 className="text-lg md:text-xl font-medium tracking-wide opacity-80 text-center uppercase">
          Працюю офіційно — ФОП, ІІІ група
        </h4>

        <div className="flex items-center gap-6 mt-[2vh]">
          {socialMedia.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.title}
              className="p-3 rounded-full transition-all duration-300 border border-transparent hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:bg-opacity-5"
              style={{ color: "var(--color-accent)" }}
            >
              <div className="transform transition-transform duration-300 hover:scale-110">
                {item.icon}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};