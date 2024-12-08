import { twMerge } from "tailwind-merge";
import { ContentSection } from "../components/ContentSection";

export interface ITitleProps {
  text: string;
  className?: string;
  color?: string;
}

export default function FooterHomePage() {
  return (
    <ContentSection
      className={twMerge("flex flex-col gap-y-6 text-white h-full")}
      bgClassName="before:bg-[#088F8F]"
    >
      {" "}
      <footer className={twMerge("w-full mx-auto", "flex flex-col gap-y-6")}>
        <div className="flex flex-col md:flex-row gap-y-6 gap-x-2">
          <div className="flex-1 md:flex-[3]">
            {/* <Logo /> */}
            <p className="mt-2 mb-6">
              Todo lo que necesitas para pasarte al coche eléctrico.
            </p>
          </div>
          <div className="flex-1 md:flex-[1]">test</div>
          <div className="flex-1 md:flex-[1]">test</div>
        </div>
        {/* <div
          className={twMerge(
            "grid gap-y-3 h-fit md:col-start-3 xl:col-start-4 md:col-end-5 mb-20 md:mb-14 lg:mb-10",
            bp === "md" ? "row-start-2" : bp === "xl" ? "row-start-1" : ""
          )}
        >
          <div className="flex gap-x-2">
            <a
              target="_blank"
              href="https://www.instagram.com/emotion.es/"
              rel="nofollow noreferrer"
            >
              <Instagram
                viewBox="0 0 24 24"
                className={twMerge(
                  stylesFooter["social-media-icon"],
                  "w-9 h-9"
                )}
              />
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@emotion.es"
              rel="nofollow noreferrer"
            >
              <Tiktok
                viewBox="0 0 24 24"
                className={twMerge(
                  stylesFooter["social-media-icon"],
                  "w-9 h-9"
                )}
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/emotion-renting/"
              rel="nofollow noreferrer"
            >
              <Linkedin
                viewBox="0 0 24 24"
                className={twMerge(
                  stylesFooter["social-media-icon"],
                  "w-9 h-9"
                )}
              />
            </a>
          </div>
          <div className="border border-[#CBCBCB]"></div>
          <div className="flex w-full justify-between flex-col gap-y-3 xl:flex-row">
            <p className="md:block md:text-left small text-grey-2 order-2 md:order-1">
              © {new Date().getFullYear()} Emotion Smart Mobility.
              {bp === undefined && <br />} Todos los derechos reservados
            </p>
            <p className="md:block md:text-left small flex flex-wrap">
              <a
                target="_blank"
                className=""
                href="https://docs.google.com/document/d/e/2PACX-1vSdxQvZCUvyvotwgL7kLRFyQ_SngAFmnv48DkxjgtPZN_dDAyVy-hsw6yCLY0yzeTCwc9EYTDEfZJp1/pub"
                rel="nofollow noreferrer"
              >
                Uso de cookies
              </a>
              &nbsp;&nbsp;{"|"}&nbsp;&nbsp;
              <a
                target="_blank"
                className=""
                href="https://docs.google.com/document/d/e/2PACX-1vQ7m_fStIIuTQDYcGbNRZ4vKnlZBqVJDjcU7sAyjpCckgTlEqstZHKSFHO54BmiXxsoK1J1BRKaqrFb/pub"
                rel="nofollow noreferrer"
              >
                Política de privacidad
              </a>
              &nbsp;&nbsp;{"|"}&nbsp;&nbsp;
              <a
                target="_blank"
                className=""
                href="https://docs.google.com/document/d/e/2PACX-1vRNz6_sUADxvDlJ3wQowIEsNubUUl0_naOQfVdg-zZ2o5Pn8e2K0fLLp1No1C5DdRGQW4JdyVsuWTg9/pub"
                rel="nofollow noreferrer"
              >
                Términos y condiciones de uso
              </a>
            </p>
          </div>
        </div> */}
      </footer>
    </ContentSection>
  );
}
