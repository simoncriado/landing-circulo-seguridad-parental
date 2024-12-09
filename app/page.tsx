"use client";

import Image from "next/image";
import { ContentSection } from "./components/ContentSection";
// import SectionReviews from "./sections/Reviews";
import Footer from "./sections/Footer";
import AdditionalInformation from "./sections/AdditionalInformation";
import InformativeSession from "./sections/InformativeSession";
import SectionContact from "./sections/Contact";
import SectionFAQ from "./sections/SectionFAQ";
import { ButtonLink } from "./components/ButtonLink";

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
                  <p>
                    Para inscribirte a la charla <strong>gratuita</strong> haz
                    click aquí 👇🏽
                  </p>
                </div>
                <ButtonLink
                  text="Inscríbete a la charla"
                  href={"https://forms.gle/VqjQmzDtzivMFZPs5"}
                  external={true}
                />
              </div>
            </ContentSection>
          </div>
        </div>
        <AdditionalInformation />
        {/* <SectionReviews reviews={reviews} /> */}
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

// const reviews = [
//   {
//     author: "Juan Carlos Marian Villar",
//     date: "25.09.2024",
//     numStars: 5,
//     text: "Trabajo impecable. Después de acompañar el equipo de montaje, estoy muy satisfecho por el trabajo realizado. Se respetaron las infraestructuras y se realizó un trabajo impecable y una puesta en marcha en compañía del supervisor. El montaje fue impecable y los operarios igualmente. Además, el equipo de operaciones y documentación están siempre pendientes de todo.",
//   },
//   {
//     author: "Juanjo",
//     date: "16.09.2024",
//     numStars: 5,
//     text: "Estoy muy satisfecho con toda la gestión que han efectuado. Me asesora con el modelo más adecuado a mis necesidades. La instalación se realizó de forma rápida y eficiente. Luego se encargaron de realizar todas las gestiones administrativas con la Comunidad de Madrid para gestionar la subvención. Me han asesorado en todo momento hasta el cobro de la subvención. Enhorabuena por vuestro trabajo.",
//   },
//   {
//     author: "Borja Muñoz",
//     date: "29.08.2024",
//     numStars: 5,
//     text: "Experiencia muy positiva. Desde el primer momento nos ayudaron con la mejor opción y buscando lo que realmente necesitábamos. Jorge fue muy amable y estuvo pendiente en todo momento de la evolución de nuestro pedido. Muy recomendable y funciona perfectamente.",
//   },
//   {
//     author: "Carlos Alvarado Salcedo",
//     date: "30.08.2024",
//     numStars: 5,
//     text: "La atención y el seguimiento han sido muy positivos. La verdad es que el presupuesto ha sido el más ajustado de todos los que recibí. La instalación fue en el día pactado y con mucha puntualidad. El servicio postventa, de momento, está siendo muy valioso.",
//   },
//   {
//     author: "Carlos",
//     date: "28.08.2024",
//     numStars: 5,
//     text: "Nos ayudaron a buscar y conseguir la mejor oferta en el vehículo. Muy pendientes de nuestras necesidades y de lo que buscábamos hasta que lo consiguieron. Además también te gestionan la instalación del punto de carga. Muy recomendable la gestión de nuestro comercial.",
//   },
// ];

const ItemsFAQS: React.ComponentProps<typeof SectionFAQ>["items"] = [
  {
    question: "¿Cuál es el objetivo principal del COSP?",
    answer: (
      <>
        <p>
          Crear un vínculo seguro que fomente el desarrollo emocional y
          autonomía en los niños/as. Para ello, se ofrece un “manual de
          instrucciones” que permite comprender mejor las necesidades
          emocionales de los niños/as y responder a ellas de forma eficaz.
        </p>
      </>
    ),
  },
  {
    question:
      "¿Cuáles son los principios clave que se trabajan durante las sesiones?",
    answer: (
      <>
        <p>
          <b>Seguridad emocional:</b> Los niños y niñas buscan a sus madres,
          padres y cuidadores como base segura para explorar el mundo con
          confianza y regresar a ellos cuando necesitan apoyo o consuelo.
        </p>
        <p>
          <b>Conexión auténtica:</b> Más que atención los niños y niñas
          necesitan sentir conexión genuina con sus figuras de cuidado.
        </p>
        <p>
          <b>Reparación y aprendizaje:</b> Los errores son inevitables, nos
          hacen aprender. El programa COSP enseña cómo repararlos para
          fortalecer la relación.
        </p>
      </>
    ),
  },
  {
    question: "¿Por qué es importante el apego seguro en la crianza?",
    answer: (
      <>
        <p>
          - El apego es la base del aprendizaje emocional: Desde bebés y sobre
          todo en la edad preescolar, los niños y niñas sientan las bases para
          la competencia social, la capacidad de afrontar el estrés y la
          regulación emocional. Se ha evidenciado que la relación de apego
          seguro con los cuidadores es un factor protector.
        </p>
        <p>
          - Muchos padres y madres tienden a repetir patrones heredados de su
          propia crianza. El programa invita a tomar consciencia de ellos y si
          es necesario, a modificarlos para llegar a ser lo que llaman “padres y
          madres suficientemente buenos”. No hay familias perfectas.
        </p>
        <p>
          - Estudios demuestran que los problemas de apego en la infancia y
          primera infancia aumentan la probabilidad de psicopatología en la vida
          adulta, mientras que un apego seguro contribuye al bienestar
          biopsicosocial.
        </p>
      </>
    ),
  },
  {
    question: "¿Pueden cambiar las relaciones gracias al apego seguro?",
    answer: (
      <>
        <p>
          Los vínculos de apego son susceptibles de mejorar a lo largo del
          tiempo y los cambios duraderos provienen del desarrollo de habilidades
          emocionales específicas en vez de utilizar técnicas ara mejorar el
          comportamiento.
        </p>
      </>
    ),
  },
  {
    question: "¿Cuáles son los beneficios para la familia?",
    answer: (
      <>
        <p>- Niños y niñas con mayor autoestima y habilidades sociales.</p>
        <p>- Padres y madres más seguras y con herramientas efectivas.</p>
        <p>- Relaciones familiares más respetuosas y conscientes.</p>
        <p>
          - Oportunidad para reflexionar sobre cómo la propia experiencia de
          apego influye en la forma de criar.
        </p>
      </>
    ),
  },
  {
    question: "¿Cómo funciona el programa?",
    answer: (
      <>
        <p>- 8 Sesiones semanales, grupales, estructuradas y prácticas.</p>
        <p>
          - Metodología vivencial: vídeos, ejercicios, y mapas concretos para
          invitar a los participantes a profundizar en sus propios patrones de
          crianza, experiencias y aprender a responder con empatía y
          sensibilidad hacia sus hijos/as.
        </p>
        <p>
          - Enfocado en situaciones diarias: rabietas, límites, separaciones y
          gestión emocional.
        </p>
      </>
    ),
  },
  {
    question: "Evidencia científica",
    answer: (
      <>
        <p>
          Estudios han demostrado que la participación en el programa COSP,
          mejora significativamente la calidad del vínculo entre padres, madres
          y cuidadores y sus hijos/as, reduce comportamientos disruptivos y
          promueve un desarrollo socioemocional positivo que influye
          posteriormente en la edad adulta.
        </p>
      </>
    ),
  },
  {
    question: "¿A quién está dirigido?",
    answer: (
      <>
        <p>
          A todas aquellas personas (padres, madres, cuidadores, abuelos/as,
          familiares, auxiliares) que tengan un rol de cuidado en la vida de un
          niño/niña. Especialmente útil para personas interesadas en fortalecer
          la relación emocional con los niños y niñas, y gestionar mejor los
          retos cotidianos de la crianza.
        </p>
      </>
    ),
  },
];
