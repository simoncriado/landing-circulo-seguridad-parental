import { Disclosure, Transition } from "@headlessui/react";
import React, { JSX } from "react";
import { twMerge } from "tailwind-merge";
import { ContentSection } from "../(components)/ContentSection";
import styles from "./SectionFAQ.module.css";

interface IFAQSectionProps {
  items: { answer: JSX.Element; question: string }[];
  heading: string;
  defaultOpen?: boolean;
}
export default function SectionFAQ({ items, heading }: IFAQSectionProps) {
  const FaqItemComponent = ({
    answer,
    question,
    defaultOpen,
  }: {
    answer: React.ReactNode;
    question: string;
    defaultOpen?: boolean;
  }) => (
    <Disclosure
      as="div"
      className={twMerge(
        "justify-center p-4 flex flex-col gap-y-6 h-fit min-h-[82px] rounded rounded-2 border border-emotionNeutral-200",
        styles["disclosure"]
      )}
      defaultOpen={defaultOpen}
    >
      {({ open }) => (
        <>
          <Disclosure.Button className={twMerge("text-left text-base")}>
            <div className="flex justify-between items-center gap-x-4 ">
              <h3 className={twMerge("text-base", "font-semibold")}>
                {question}
              </h3>
              <div className={twMerge(styles["disclosure-add"])}>
                <span></span>
                <span></span>
              </div>
            </div>
          </Disclosure.Button>
          <Transition
            className="overflow-hidden"
            enter="transition transition-[max-height] duration-200 ease-in"
            enterFrom="transform max-h-0"
            enterTo="transform max-h-[1200px]"
            leave="transition transition-[max-height] duration-400 ease-out"
            leaveFrom="transform max-h-[1200px]"
            leaveTo="transform max-h-0"
            unmount={false}
          >
            <Disclosure.Panel
              className={twMerge("article", styles["panel"])}
              unmount={false}
            >
              {answer}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );

  return (
    <ContentSection className="flex flex-col gap-y-10">
      <h2 className="headline-lg">{heading}</h2>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-6 w-full">
        {items.map(({ answer, question }, i) => (
          <FaqItemComponent
            key={`faq_item_${question}`}
            question={question}
            answer={answer}
            defaultOpen={false}
          />
        ))}
      </div>
    </ContentSection>
  );
}
