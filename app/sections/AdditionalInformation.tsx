import { ContentSection } from "../(components)/ContentSection";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import HoldingHandsImage from "../../public/assets/holdingHandsImage.jpg";

export default function AdditionalInformation() {
  return (
    <ContentSection className={twMerge("flex flex-col gap-y-20")}>
      <div className="flex flex-col lg:flex-row gap-x-24 gap-y-6 md:gap-y-10 items-center">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <h2 className="headline-lg">
            ¿Qué es el Círculo de Seguridad Parental COSP?
          </h2>
          <p>
            Creado por Glen Cooper, Kent Hoffman y Bert Powell, expertos en
            <strong> teoría del Apego</strong> y{" "}
            <strong>neurobiología interpersonal</strong>.
          </p>
          <p>
            El <strong>Círculo de Seguridad Parental</strong> te ofrece un{" "}
            <strong>mapa claro</strong> para comprender y satisfacer las
            <strong> necesidades emocionales</strong> de tus hijos/as mientras
            también trabajas en tu propio crecimiento personal y emocional.{" "}
          </p>
          <p>
            ¡Es una poderosa herramienta para fomentar relaciones sanas y
            seguras!
          </p>
        </div>
        <div
          style={{ borderRadius: "6px", overflow: "hidden" }}
          className="w-full lg:w-1/2"
        >
          <Image
            alt="Holding hands"
            src={HoldingHandsImage}
            className="object-cover h-auto mx-auto max-h-[350px] w-auto lg:w-full"
          />
        </div>
      </div>
    </ContentSection>
  );
}
