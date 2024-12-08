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
        <div className="flex flex-col md:flex-row gap-y-6 gap-x-6 items-center md:items-start">
          {/* Left Column */}
          <div className="flex-1 md:flex-[3]">
            <p className="text-sm md:text-base mt-2">
              © 2024 - Paola Castellanos - Paula Murcia
            </p>
          </div>

          {/* Middle Column with Image */}
          <div className="flex-1 md:flex-[1] flex justify-center">
            <Image
              src="/assets/COSPLogo.jpg"
              alt="COSP Logo"
              width={120}
              height={120}
              className="rounded-full shadow-md"
            />
          </div>

          {/* Right Column with Image */}
          <div className="flex-1 md:flex-[1] flex justify-center">
            <Image
              src="/assets/image2.jpg" // Replace with your actual image path
              alt="Image Description 2"
              width={120}
              height={120}
              className="rounded-full shadow-md"
            />
          </div>
        </div>
      </footer>
    </ContentSection>
  );
}
