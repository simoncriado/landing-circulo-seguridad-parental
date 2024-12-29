import { twMerge } from "tailwind-merge";
import { ContentSection } from "../components/ContentSection";
import Image from "next/image";

export default function FooterHomePage() {
  return (
    <ContentSection
      className={twMerge("flex flex-col gap-y-8 text-white")}
      bgClassName="before:bg-[#009d94]"
    >
      <footer className="w-full mx-auto flex flex-col gap-y-8">
        {/* Footer Main Row */}
        <div className="flex flex-col md:flex-row gap-y-6 gap-x-6 items-center ">
          {/* Left Column */}
          <div className="flex-1 md:flex-[3]">
            <p className="text-sm md:text-base mt-2">
              © 2025 - Paola Castellanos - Paula Murcia
            </p>
          </div>

          {/* Middle Column with Image */}
          <div className="flex-1 md:flex-[1] flex justify-center">
            <Image
              src="/assets/COSPLogo.jpg"
              alt="COSP Logo"
              width={60}
              height={60}
              className="rounded-full shadow-md"
            />
          </div>

          {/* Right Column with SVG */}
          <div className="flex-1 md:flex-[1] flex justify-center bg-white rounded-full">
            <Image
              src="/assets/svgviewer-output.svg"
              alt="COSP Logo"
              layout="intrinsic"
              width={120}
              height={120}
              className="rounded-full h-16 w-56 lg:w-96 shadow-md"
            />
          </div>
        </div>
      </footer>
    </ContentSection>
  );
}
