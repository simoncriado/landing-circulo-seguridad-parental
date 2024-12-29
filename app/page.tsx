"use client";

import Image from "next/image";
import { ContentSection } from "./components/ContentSection";
import SectionReviews from "./sections/Reviews";
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
            className="z-0 object-cover object-center scale-x-[-1]"
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
                    relaciones con <strong>Apego Seguro</strong> para padres,
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
                  text="Inscríbete a la charla gratuita"
                  href={"https://forms.gle/9mSfPUFrfnkK86kBA"}
                  external={true}
                />
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
    author: "Maira, abuela de Gaby (2 años)",
    date: "Junio 2024",
    numStars: 5,
    text: "De este programa valoro el tiempo de reflexión que nos dieron, los momentos que tuvimos para interiorizar el aprendizaje y haberlo hecho en grupo fue bonito porque en grupo aprendemos todos. En grupo experimentamos emociones propias y compartidas y eso fue algo muy enriquecedor. Este grupo se basa en reconocer las necesidades del niño, si, pero que hay que poner unos límites, también. Lo recomendaría a todas las personas que tengan a cargo un niño, un menor porque veo que dejamos una huella seamos maestros, familiares, canguros, padres, madres abuelos, y porque están cuidando de alguien y manejando emociones.",
  },
  {
    author: "Silvia, madre de Gala (2 años)",
    date: "Abril 2024",
    numStars: 5,
    text: "Los cambios qué más he notado tras realizar el programa es que las rabietas que tiene no las tiene tan intensas y sobre todo que conectamos más. Me ha gustado que fuese impartido por dos psicólogas, eso a mi me da mucha confianza. Lo recomendaría a todo el mundo porque al final esto lo puedes aplicar a cualquier vinculo o relación.",
  },
  {
    author: "Emma, madre de Brais (5 años)",
    date: "Abril 2024",
    numStars: 5,
    text: "Lo que he notado es que tras realizar el programa, a mi hijo le resulta más sencillo expresar más sus emociones, regularse mejor y también veo que no demanda tanto mi presencia de  “¡mamá, mamá!”. Además, si mi pareja y él tienen un conflicto lo pueden resolver sin pelea sin necesidad de que yo intervenga. Lo que veo es que el programa hace participar más al hijo, lo hace reflexionar más, conectar con sus sentimientos y no es a base ni de castigos ni de premios. Lo recomendaría a todo el mundo. Todo tipo de relaciones que de alguna manera te resulten difíciles te ayuda a verlas de otra manera.",
  },
  {
    author: "Noelia, madre de Gabriela (4 años)",
    date: "Marzo 2024",
    numStars: 5,
    text: "La primero que aprendí en el programa es a saber observar, a salir fuera de la situación y preguntarme: ¿qué está pasando, qué está necesitando mi hija?, y sobre todo, ser consciente de que la madre soy yo, soy yo la responsable del bienestar de mi hija y al serlo, pongo la atención en mi, en qué debo hacer  para que ella esté bien. Yo recomendaría el programa a todo el mundo, porque al final aprendes a como relacionarte de otra forma.",
  },

  {
    author: "Santi, padre de Brais (5 años)",
    date: "Marzo 2024",
    numStars: 5,
    text: "Me apunté al programa por la situación que tenía en casa, en la relación con mi hijo que era muy complicada, crispada por decirlo de alguna manera, y momentos de mucha tensión, en las que yo lo pasaba mal, él lo pasaba mal y mi pareja lo pasaba mal. Pienso que fue una buena decisión apuntarse. Aprendí que no se trata de ir imponiendo tus criterios si no siguiendo y acompañando las emociones y necesidades del niño para poder guiarlo y que sea un adulto que se pueda hacer cargo de sus propias emociones.",
  },
  {
    author: "Maria, madre de dos mellizas",
    date: "Mayo 2023",
    numStars: 5,
    text: "Para mi, paraticipar en la formación del Circulo de Seguridad ha significado encontrar un camino a seguir, un camino en el cual sentirme acompañada y descansar los miedos. Sin duda la maternindad consciente requiere de recursos prácticos y de compañer@s de camino.",
  },
];

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
          - <b>El apego es la base del aprendizaje emocional:</b> Desde bebés y
          sobre todo en la edad preescolar, los niños y niñas sientan las bases
          para la competencia social, la capacidad de afrontar el estrés y la
          regulación emocional. Se ha evidenciado que la relación de apego
          seguro con los cuidadores es un factor protector.
        </p>
        <p>
          - <b>Reflexión sobre patrones de crianza:</b> Muchos padres y madres
          tienden a repetir patrones heredados de su propia crianza. El programa
          invita a tomar consciencia de ellos y si es necesario, a modificarlos
          para llegar a ser lo que llaman “padres y madres suficientemente
          buenos”. No hay familias perfectas.
        </p>
        <p>
          - <b>El apego seguro mejora la salud mental:</b> Estudios demuestran
          que los problemas de apego en la infancia y primera infancia aumentan
          la probabilidad de psicopatología en la vida adulta, mientras que un
          apego seguro contribuye al bienestar biopsicosocial.
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
          emocionales específicas en vez de utilizar técnicas para mejorar el
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
          Estudios han demostrado que la <b>participación</b> en el{" "}
          <b>programa COSP</b>, <b>mejora significativamente</b> la calidad del{" "}
          <b>vínculo</b>
          entre padres, madres y cuidadores y sus hijos/as,{" "}
          <b>reduce comportamientos disruptivos</b> y promueve un{" "}
          <b>desarrollo socioemocional positivo</b> que influye posteriormente
          en la <b>edad adulta</b>.
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
