"use client";

import Image from "next/image";
import { ContentSection } from "./components/ContentSection";
import SectionReviews from "./sections/Reviews";
import Footer from "./sections/Footer";
import AdditionalInformation from "./sections/AdditionalInformation";
import InformativeSession from "./sections/InformativeSession";
import SectionContact from "./sections/Contact";
import SectionFAQ from "./sections/SectionFAQ";

export default function Home() {
  return (
    // Wrap the layout
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center bg-gradient-to-br from-[#f2fcfb] to-[#d6f7f3]">
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
                    Círculo de Seguridad Parental COSP ®
                  </h1>
                  <p>
                    Descubre el programa innovador: <strong>Conexión</strong> y
                    relaciones con <strong>apego seguro</strong> para padres,
                    madres y cuidadores.
                  </p>
                  <p>
                    Un programa de crianza consciente basado en décadas de
                    investigación sobre apego seguro y relaciones afectivas
                    eficaces.
                  </p>
                </div>
              </div>
            </ContentSection>
          </div>
        </div>
        <AdditionalInformation />
        <SectionReviews reviews={reviews} />
        <InformativeSession />
        <SectionFAQ
          heading="Preguntas frecuentes sobre el Círculo de Seguridad Parental"
          items={ItemsFAQS}
        />
        <SectionContact />
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

const ItemsFAQS: React.ComponentProps<typeof SectionFAQ>["items"] = [
  {
    question: "¿Cuánto tardáis en instalar mi cargador de vehículo eléctrico?",
    answer: (
      <>
        <p>
          Tu <b>cargador de vehículo eléctrico</b> estará instalado en un plazo
          de 10 días laborables desde que confirmemos tu pago.
        </p>
      </>
    ),
  },
  {
    question: "¿Cuántos años de garantía tienen los cargadores para coches?",
    answer: (
      <>
        <p>
          Los <b>cargadores para coches</b> de Emotion tienen de 3 a 4 años de
          garantía en función del modelo que elijas. Todos tienen servicio
          postventa gratis.
        </p>
      </>
    ),
  },
  {
    question:
      "¿Puedo instalar un punto de carga para coche eléctrico en mi garaje comunitario?",
    answer: (
      <>
        <p>
          Claro, podemos instalarte un punto de carga (o los que necesites) para
          tu empresa. Las ayudas del Estado son más pequeñas que cuando instalas
          un cargador de coche eléctrico como particular, pero aún así también
          suponen mucho ahorro.
        </p>
        <p>
          Escríbenos y te asesoraremos con todo. Hasta podemos proporcionarte la
          flota de vehículos híbridos o eléctricos de renting para que ahorres
          todavía más.
        </p>
      </>
    ),
  },
  {
    question: "¿Puedo instalar el punto de carga como autónomo o empresa?",
    answer: (
      <>
        <p>
          Claro, podemos instalarte un punto de carga (o los que necesites) para
          tu empresa. Las ayudas del Estado son más pequeñas que cuando instalas
          un cargador de coche eléctrico como particular, pero aún así también
          suponen mucho ahorro.
        </p>
        <p>
          Escríbenos y te asesoraremos con todo. Hasta podemos proporcionarte la
          flota de vehículos híbridos o eléctricos de renting para que ahorres
          todavía más.
        </p>
      </>
    ),
  },
  {
    question:
      "¿Qué permisos necesito para instalar un cargador de vehículo eléctrico?",
    answer: (
      <>
        <p>
          Si vives en una comunidad de vecinos, no es necesario que pidas
          permiso para instalar tu <b>cargador de coche eléctrico</b> o híbrido
          enchufable. Simplemente, notifica al presidente o administrador que
          vas a instalar un punto de recarga.
        </p>
        <p>
          En Emotion te asesoramos gratis si tienes otras dudas relativas a los
          permisos o licencias, aunque te adelantamos que no hay trabas legales.
        </p>
      </>
    ),
  },
  {
    question: "¿Hay cargadores solares para coches eléctricos?",
    answer: (
      <>
        <p>
          No existe algo como un <b>cargador solar para coche eléctrico.</b>{" "}
          Simplemente, puedes conectar tus placas solares al punto de carga que
          instalemos.
        </p>
        <p>
          En el estudio inicial tendrás que decirnos qué placas solares tienes
          instaladas en casa para buscar el <b>cargador eléctrico</b> adecuado.
          Además, también podemos instalarte las placas si aún no las tienes.
        </p>
      </>
    ),
  },
  {
    question:
      "¿Puedo utilizar mi cargador de coche eléctrico aunque cambie de vehículo?",
    answer: (
      <>
        <p>
          Sí, los <b>cargadores domésticos para coche eléctrico</b> valen para
          todas las marcas y modelos.
        </p>
        <p>
          Hoy en día el conector está estandarizado para todos los coches
          eléctricos, así que hasta podrías compartir el <b>punto de carga</b>{" "}
          con algún vecino.
        </p>
      </>
    ),
  },
  {
    question: "Si me mudo, ¿qué pasa con mi cargador eléctrico?",
    answer: (
      <>
        <p>
          Si te mudas, el <b>cargador de tu coche eléctrico</b> seguirá
          funcionando en tu nueva vivienda. Tendremos que realizar la
          instalación de nuevo, pero el coste del <b>cargador eléctrico</b> ya
          lo abonaste en su momento y no hay por qué cambiarlo.
        </p>
      </>
    ),
  },
];
