"use client";

import { Children, useEffect, useRef, useState } from "react";
import type { ReactNode, WheelEvent } from "react";
import Image from "next/image";

type CardCarouselProps = {
  children: ReactNode;
  itemClassName?: string;
  paddingLeftPx?: number;
};

export default function CardCarousel({
  children,
  itemClassName = "w-[268px] shrink-0",
  paddingLeftPx = 121,
}: CardCarouselProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [arrowRight, setArrowRight] = useState<number | null>(null);

  const cards = Children.toArray(children);
  const totalCards = cards.length;

  useEffect(() => {
    const updateArrowPosition = () => {
      const root = rootRef.current;
      const track = scrollRef.current;
      if (!root || !track) return;

      const fourthCard = track.children[3] as HTMLElement | undefined;
      if (!fourthCard) {
        setArrowRight(null);
        return;
      }

      const rootRect = root.getBoundingClientRect();
      const fourthCardRect = fourthCard.getBoundingClientRect();

      const offsetFromRight = Math.max(
        0,
        Math.round(rootRect.right - fourthCardRect.right)
      );
      setArrowRight(offsetFromRight);
    };

    updateArrowPosition();

    const observer = new ResizeObserver(updateArrowPosition);
    if (rootRef.current) observer.observe(rootRef.current);
    if (scrollRef.current) observer.observe(scrollRef.current);

    window.addEventListener("resize", updateArrowPosition);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateArrowPosition);
    };
  }, [totalCards, paddingLeftPx]);

  const getCardPosition = (item: HTMLElement) => {
    const container = scrollRef.current;
    if (!container) return 0;

    return (
      item.getBoundingClientRect().left -
      container.getBoundingClientRect().left +
      container.scrollLeft
    );
  };

  const updateActiveIndex = () => {
    const container = scrollRef.current;
    if (!container) return;

    const items = Array.from(container.children) as HTMLElement[];

    let closestIndex = 0;
    let closestDistance = Infinity;

    items.forEach((item, index) => {
      const distance = Math.abs(getCardPosition(item) - container.scrollLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

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

  const scrollPrevious = () => {
    scrollToCard(Math.max(activeIndex - 3, 0));
  };

  const scrollNext = () => {
    scrollToCard(Math.min(activeIndex + 3, totalCards - 1));
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    }
  };

  return (
    <div ref={rootRef} className="relative w-full">
      {/* Cards Slider */}
      <div
        ref={scrollRef}
        onScroll={updateActiveIndex}
        onWheel={handleWheel}
        style={{ paddingLeft: `${paddingLeftPx}px` }}
        className="flex w-full gap-[32px] overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {cards.map((card, index) => (
          <div key={index} className={itemClassName}>
            {card}
          </div>
        ))}
      </div>

      {/* Bottom Controls Area */}
      <div className="relative mt-6 h-10 w-full">
        {/* Diamond Indicators */}
        <div
          style={{ left: `${paddingLeftPx}px` }}
          className="absolute top-0 flex items-center gap-1"
        >
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

        {/* Arrow Buttons */}
        <div
          style={arrowRight !== null ? { right: `${arrowRight}px` } : undefined}
          className="absolute right-0 top-0 flex w-[88px] shrink-0 items-center justify-between"
        >
          <button
            type="button"
            onClick={scrollPrevious}
            disabled={activeIndex === 0}
            aria-label="Previous cards"
            className="flex h-8 w-8 items-center justify-center"
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
            className="flex h-8 w-8 items-center justify-center"
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