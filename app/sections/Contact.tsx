import { ContentSection } from "../(components)/ContentSection";
import Link from "next/link";
import Image from "next/image";

export default function SectionContact() {
  return (
    <ContentSection className="flex flex-col gap-y-6 lg:justify-between">
      <div className="flex flex-col md:flex-row gap-4">
        <div
          style={{
            borderRadius: "8px",
            boxShadow: "0px 15px 25px 0px rgba(0, 0, 0, 0.08)",
          }}
          className="transition-all bg-[#f2fcfb] px-4 py-6 w-full md:w-1/2 flex flex-col items-center"
        >
          <div className="w-full max-w-48 sm:w-48 h-64 mb-4 relative">
            <Image
              src="/assets/PaolaCastellanos.jpg"
              alt="Paola Castellanos"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <div className="text-center">
            <h2 className="font-bold mb-2">Paola Castellanos</h2>
            <p>Psicóloga, psicoterapeuta, facilitadora COSP</p>
            <p className="mb-4">Nº. Col. 20994 COPC</p>
            <h3 className="font-semibold">Email:</h3>
            <Link href={`mailto:circulodeseguridadparental@gmail.com`}>
              <p className="break-all">circulodeseguridadparental@gmail.com</p>
            </Link>
          </div>
        </div>
        <div
          style={{
            borderRadius: "10px",
            boxShadow: "0px 15px 25px 0px rgba(0, 0, 0, 0.08)",
          }}
          className="transition-all bg-[#f2fcfb] px-4 py-6 w-full md:w-1/2 flex flex-col items-center"
        >
          <div className="w-full max-w-48 sm:w-48 h-64 mb-4 relative">
            <Image
              src="/assets/PaulaMurcia.jpg"
              alt="Paula Murcia"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <div className="text-center">
            <h2 className="font-bold mb-2">Paula Murcia</h2>
            <p>Psicóloga, psicoterapeuta, facilitadora COSP</p>
            <p className="mb-4">Nº. Col. 16088 COPC</p>
            <h3 className="font-semibold">Email:</h3>
            <Link href={`mailto:circulodeseguridadparental@gmail.com`}>
              <p className="break-all">circulodeseguridadparental@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>
    </ContentSection>
  );
}
