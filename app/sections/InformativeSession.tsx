import Image from "next/image";
import { ContentSection } from "../(components)/ContentSection";
import { twMerge } from "tailwind-merge";
import InfoSessionImage from "../../public/assets/infoSessionImage.png";
import { ButtonLink } from "../components/ButtonLink";

export default function InformativeSession() {
  return (
    <ContentSection
      className={twMerge("flex flex-col gap-y-6")}
      bgClassName="before:bg-emotionBlue-pressed"
    >
      <h2 className="headline-lg">Charla gratuita para familias</h2>
      <div className="flex flex-col lg:flex-row gap-x-24 gap-y-6 md:gap-y-10 items-center">
        <div
          style={{ borderRadius: "6px", overflow: "hidden" }}
          className="w-full lg:w-1/2"
        >
          <Image
            alt="Padres y madres atendiento a la charla informativa"
            src={InfoSessionImage}
            className="object-cover h-auto mx-auto max-h-[350px] w-auto"
          />
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <p>
            En nuestras <strong>charlas gratuitas</strong> aprenderás qué es el
            apego, su importancia en el bienestar emocional y los aspectos que
            deberíamos tener en cuenta para construir vínculos seguros. Podrás
            conocer con más detalle el programa del Círculo de Seguridad
            Parental y descubrirás que la seguridad relacional{" "}
            <strong>NO</strong> se basa en la perfección.
          </p>

          <p>
            Si estás interesada en asistir a una de nuestras charlas gratuitas
            <strong> ¡inscríbete ahora!</strong>
          </p>
          <ButtonLink
            text="Inscríbete a la charla gratuita"
            href={"https://forms.gle/9mSfPUFrfnkK86kBA"}
            external={true}
          />
        </div>
      </div>
    </ContentSection>
  );
}
