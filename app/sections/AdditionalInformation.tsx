import { ContentSection } from "../(components)/ContentSection";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import HoldingHandsImage from "../../public/assets/holdingHandsImage.jpg";

export default function AdditionalInformation() {
  return (
    <ContentSection className={twMerge("flex flex-col gap-y-20")}>
      <div className="flex flex-col lg:flex-row gap-x-24 gap-y-6 md:gap-y-10 items-center">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <h2 className="headline-lg">¿Qué es el COSP?</h2>
          <p>
            Creado por <strong>Glen Cooper, Kent Hoffman y Bert Powell</strong>,
            expertos en teoría del apego y neurobiología interpersonal.{" "}
          </p>
          <p>
            El Círculo de Seguridad Parental (COSP) es un programa basado en
            décadas de investigación sobre el apego seguro. Está diseñado para
            ayudar a padres y cuidadores a{" "}
            <strong>comprender las necesidades emocionales</strong> de sus
            hijos/as, <strong>fortalecer el vínculo</strong> con ellos y
            promover un desarrollo socioemocional saludable.
          </p>
          <p>
            Este enfoque práctico se estructura en ocho sesiones interactivas,
            donde se utilizan videos, ejercicios y reflexiones para ayudar a los
            participantes a profundizar en sus propios patrones de crianza y
            aprender a responder con empatía y sensibilidad a sus hijos/as.
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
