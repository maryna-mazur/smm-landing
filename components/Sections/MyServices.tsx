import { montserrat } from "@/lib/fonts";
import { Title } from "@/components/UI/Title";
import { ServiceCard } from "@/components/ServiceCard";
import { servicesData } from "@/data/services";

export const MyServices = () => {
  return (
    <section
      id="my-services"
      className={`w-full min-h-screen flex flex-col items-center p-4 ${montserrat.className} overflow-x-hidden`}
      style={{
        color: "var(--color-text-color)",
        backgroundColor: "var(--color-bg-primary)",
        fontSize: "4vh",
      }}
    >
      <div
        className="flex flex-col items-center"
        style={{ width: "clamp(250px, 90vw, 750px)" }}
      >
        <Title
          title="Мої послуги"
          subtitle="my services"
          color="var(--color-accent)"
        />

        <div className="flex flex-col mt-[2.4rem] p-[3vw] gap-[2vh]">
          {servicesData.map((service, index) => (
            <ServiceCard service={service} key={service.id} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
