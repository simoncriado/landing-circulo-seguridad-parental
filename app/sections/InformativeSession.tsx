import Image from "next/image";
import { ContentSection } from "../(components)/ContentSection";
import { twMerge } from "tailwind-merge";
import InfoSessionImage from "../../public/assets/infoSessionImage.webp";
import { ButtonLink } from "../components/ButtonLink";

export default function InformativeSession() {
  return (
    <ContentSection
      className={twMerge("flex flex-col gap-y-6")}
      bgClassName="before:bg-emotionBlue-pressed"
    >
      <h2 className="headline-lg">Charla gratuita para familias</h2>
      <div className="flex flex-col lg:flex-row gap-x-24 gap-y-6 md:gap-y-10 items-center">
        <div className="w-full lg:w-1/2">
          <Image
            alt="Padres y madres atendiento a la charla informativa"
            src={InfoSessionImage}
            className="object-cover h-auto mx-auto max-h-[350px] w-auto"
          />
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <p>
            Una adecuada conexión emocional con tu hijo/a es la piedra angular
            para desarrollar una crianza respetuosa y con sentido.
          </p>
          <p>
            Aprende, desde las primeras sesiones cómo mejorar tu rol como
            cuidadora y podrás observar beneficios para tu hijo/a.
          </p>
          <p>
            Si estás interesada en asistir a una charla gratuita, ¡inscríbete!{" "}
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
