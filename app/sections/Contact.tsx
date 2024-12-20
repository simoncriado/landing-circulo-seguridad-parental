import { ContentSection } from "../(components)/ContentSection";
import Link from "next/link";

export default function SectionContact() {
  return (
    <ContentSection className="flex flex-col gap-y-6 lg:justify-between">
      <div className="flex flex-col md:flex-row gap-4">
        <div
          style={{
            borderRadius: "8px",
            boxShadow: "0px 15px 25px 0px rgba(0, 0, 0, 0.08)",
          }}
          className="transition-all bg-white px-4 py-6 w-full md:w-1/2"
        >
          <h2 className="font-bold mb-2">Paola Castellanos</h2>
          <p>Psicóloga, psicoterapeuta, facilitadora COSP</p>
          <p className="mb-4">Número de colegiada: 20994 COPC</p>
          <h3 className="font-semibold">Email:</h3>
          <Link
            className="flex items-center gap-x-2"
            href={`mailto:circulodeseguridadparental@gmail.com`}
          >
            <p>circulodeseguridadparental@gmail.com</p>
          </Link>
        </div>
        <div
          style={{
            borderRadius: "10px",
            boxShadow: "0px 15px 25px 0px rgba(0, 0, 0, 0.08)",
          }}
          className="transition-all bg-white px-4 py-6 w-full md:w-1/2"
        >
          <h2 className="font-bold mb-2">Paula Murcia</h2>
          <p>Psicóloga, psicoterapeuta, facilitadora COSP</p>
          <p className="mb-4">Número de colegiada: 16088 COPC</p>
          <h3 className="font-semibold">Email:</h3>
          <Link
            className="flex items-center gap-x-2"
            href={`mailto:circulodeseguridadparental@gmail.com`}
          >
            <p>circulodeseguridadparental@gmail.com</p>
          </Link>
        </div>
      </div>
    </ContentSection>
  );
}
