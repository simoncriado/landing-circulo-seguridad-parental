import { ContentSection } from "../components/ContentSection";
import CardReviews from "../components/CardReviews";
import { Swiper } from "../components/swiper/Swiper";

interface IReviewProps {
  reviews: {
    author: string;
    date: string;
    numStars: number;
    text: string;
    color?: string;
  }[];
}

export default function SectionTrustPilotCarousel({ reviews }: IReviewProps) {
  return (
    <ContentSection
      className="flex flex-col gap-y-6"
      bgClassName="before:bg-emotionNeutral-surface"
    >
      <h2 className="headline-lg text-center">Testimonios</h2>
      <Swiper aria-label="opinions" navigation={false}>
        {reviews.map((review, index) => (
          <div key={index} className="pb-8 h-full">
            <CardReviews
              author={review.author}
              date={review.date}
              numStars={review.numStars}
              text={<p>{review.text}</p>}
            />
          </div>
        ))}
      </Swiper>
    </ContentSection>
  );
}
