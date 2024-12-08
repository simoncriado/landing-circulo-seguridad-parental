"use client";

import Image from "next/image";
import { ContentSection } from "./components/ContentSection";
import { ButtonLink } from "./components/ButtonLink";
import SectionReviews from "./sections/Reviews";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    // Wrap the layout
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center">
        <div className="relative w-full">
          <Image
            src="/assets/landingPageHeroImage.jpg"
            alt="Background Image"
            fill
            priority
            className="z-0 object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#000000] bg-opacity-40 z-10"></div>
          <div className="relative z-20">
            <ContentSection className="flex flex-col lg:flex-row gap-y-6 lg:py-40 xl:py-60 lg:justify-between">
              <div className="flex flex-col gap-y-6 text-center md:text-left">
                <div className="flex flex-col gap-y-4 md:w-[450px] text-white">
                  <h1 className="headline-lg">
                    Mejores ofertas de renting de coches eléctricos e híbridos
                  </h1>
                  <p>
                    Porque tener un coche sostenible no tiene que ser
                    complicado.
                  </p>
                </div>
                <ButtonLink text="Formulario de inscripción" href="#" />
              </div>
            </ContentSection>
          </div>
        </div>
        <SectionReviews reviews={reviews} />
      </main>
      <Footer />
    </div>
  );
}

const reviews = [
  {
    author: "Juan Carlos Marian Villar",
    date: "25.09.2024",
    numStars: 5,
    text: "Trabajo impecable. Después de acompañar el equipo de montaje, estoy muy satisfecho por el trabajo realizado. Se respetaron las infraestructuras y se realizó un trabajo impecable y una puesta en marcha en compañía del supervisor. El montaje fue impecable y los operarios igualmente. Además, el equipo de operaciones y documentación están siempre pendientes de todo.",
  },
  {
    author: "Juanjo",
    date: "16.09.2024",
    numStars: 5,
    text: "Estoy muy satisfecho con toda la gestión que han efectuado. Me asesora con el modelo más adecuado a mis necesidades. La instalación se realizó de forma rápida y eficiente. Luego se encargaron de realizar todas las gestiones administrativas con la Comunidad de Madrid para gestionar la subvención. Me han asesorado en todo momento hasta el cobro de la subvención. Enhorabuena por vuestro trabajo.",
  },
  {
    author: "Borja Muñoz",
    date: "29.08.2024",
    numStars: 5,
    text: "Experiencia muy positiva. Desde el primer momento nos ayudaron con la mejor opción y buscando lo que realmente necesitábamos. Jorge fue muy amable y estuvo pendiente en todo momento de la evolución de nuestro pedido. Muy recomendable y funciona perfectamente.",
  },
  {
    author: "Carlos Alvarado Salcedo",
    date: "30.08.2024",
    numStars: 5,
    text: "La atención y el seguimiento han sido muy positivos. La verdad es que el presupuesto ha sido el más ajustado de todos los que recibí. La instalación fue en el día pactado y con mucha puntualidad. El servicio postventa, de momento, está siendo muy valioso.",
  },
  {
    author: "Carlos",
    date: "28.08.2024",
    numStars: 5,
    text: "Nos ayudaron a buscar y conseguir la mejor oferta en el vehículo. Muy pendientes de nuestras necesidades y de lo que buscábamos hasta que lo consiguieron. Además también te gestionan la instalación del punto de carga. Muy recomendable la gestión de nuestro comercial.",
  },
];
