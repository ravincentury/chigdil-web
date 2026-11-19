"use client";

import { Children, useRef, useState } from "react";
import type { ReactNode, WheelEvent } from "react";
import Image from "next/image";

type CardCarouselProps = {
  children: ReactNode;
  itemClassName?: string;
};

export default function CardCarousel({
  children,
  itemClassName = "w-[268px] shrink-0",
}: CardCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = Children.toArray(children);
  const totalCards = cards.length;

  // Card position
  const getCardPosition = (item: HTMLElement) => {
    const container = scrollRef.current;
    if (!container) return 0;

    return (
      item.getBoundingClientRect().left -
      container.getBoundingClientRect().left +
      container.scrollLeft
    );
  };

  // Active diamond update
  const updateActiveIndex = () => {
    const container = scrollRef.current;
    if (!container) return;

    const items = Array.from(container.children) as HTMLElement[];

    let closestIndex = 0;
    let closestDistance = Infinity;

    items.forEach((item, index) => {
      const distance = Math.abs(
        getCardPosition(item) - container.scrollLeft
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  // Scroll to card
  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const item = container.children[index] as HTMLElement;
    if (!item) return;

    container.scrollTo({
      left: getCardPosition(item),
      behavior: "smooth",
    });
  };

  // Arrow navigation - 3 card jump
  const scrollPrevious = () => {
    scrollToCard(Math.max(activeIndex - 3, 0));
  };

  const scrollNext = () => {
    scrollToCard(Math.min(activeIndex + 3, totalCards - 1));
  };

  // Mouse wheel horizontal scroll
  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    }
  };

  return (
    <div className="relative w-full">
      {/* Cards Slider */}
      <div
        ref={scrollRef}
        onScroll={updateActiveIndex}
        onWheel={handleWheel}
        className="flex w-full gap-[32px] overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pr-5 md:pr-0"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${itemClassName} snap-start`}
          >
            {card}
          </div>
        ))}
      </div>

      {/* Bottom Controls Area */}
      <div className="relative mt-6 h-10 w-full">

        {/* Diamond Indicators - Separate */}
        <div className="absolute left-0 top-0 flex items-center gap-1">
          {cards.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to card ${index + 1}`}
              aria-current={activeIndex === index ? "step" : undefined}
              onClick={() => scrollToCard(index)}
              className="flex h-3 w-3 items-center justify-center"
            >
              <span
                className={`h-1.5 w-1.5 rotate-45 border border-[#aa391c] transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#aa391c] opacity-100"
                    : "bg-transparent opacity-50"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Arrow Buttons - Aligned with 4th card edge */}
        <div className="absolute right-6 top-0 flex w-[88px] shrink-0 items-center justify-between md:right-40 xl:right-44 2xl:right-50">
          <button
            type="button"
            onClick={scrollPrevious}
            disabled={activeIndex === 0}
            aria-label="Previous cards"
            className="flex h-10 w-10 items-center justify-center"
          >
            <Image
              src="/assets/buttons/left-arrow.png"
              alt="Previous Arrow"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            disabled={activeIndex === totalCards - 1 || totalCards === 0}
            aria-label="Next cards"
            className="flex h-10 w-10 items-center justify-center"
          >
            <Image
              src="/assets/buttons/right-arrow.png"
              alt="Next Arrow"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
          </button>
        </div>

      </div>
    </div>
  );
}