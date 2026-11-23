"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CardSlider from "@/components/Cardslider";

const comfortText =
  "A window into a way of life where human and more-than-human world coexist, responsibility is shared while relieving individual burden, and selfhood is understood through care for others. Harmony is sought without denying moments of discord, and rules are respected while allowing space for disobedience—so the community can adapt and endure.";

const slides = [
  { image: "/assets/comfort/comfort.png", title: "More Than Just a Homestay" },
  { image: "/assets/comfort/comfort2.png", title: "" },
  { image: "/assets/comfort/comfort3.png", title: "" },
  { image: "/assets/comfort/comfort4.png", title: "" },
];

const comfortCards = [
  { id: 1, name: "Samstan Dolma", image: "/assets/cards/samstan.png" },
  { id: 2, name: "Sonam Palmo", image: "/assets/cards/sonam.png" },
  { id: 3, name: "Padma Dolma", image: "/assets/cards/padma.png" },
  { id: 4, name: "Tashi Tsomo", image: "/assets/cards/tashi.png" },
  { id: 5, name: "Tsering Dolma", image: "/assets/cards/tsering.png" },
  { id: 6, name: "Phunchok Dolma", image: "/assets/cards/phunchok.png" },
  { id: 7, name: "Chewang Lamo", image: "/assets/cards/chewang.png" },
  { id: 8, name: "Chamba Charol", image: "/assets/cards/chamba.png" },
  { id: 9, name: "Tsering Yangskit", image: "/assets/cards/yangskit.png" },
];

function getResponsivePaddingLeft(width: number): number {
  if (width >= 1920) return 127;
  if (width >= 1536) return 122;
  if (width >= 768) return 97;
  return 20;
}

export default function ComfortPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paddingLeftPx, setPaddingLeftPx] = useState<number>(109);
  const currentSlide = slides[activeSlide];

  useEffect(() => {
    const handleResize = () => {
      setPaddingLeftPx(getResponsivePaddingLeft(window.innerWidth));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const previousSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="w-full">
      {/* DESKTOP HERO SECTION */}
      <section className="relative hidden h-screen min-h-[650px] w-full overflow-hidden md:block 2xl:min-h-[850px] min-[1920px]:min-h-[1000px]">
        <Image
          src={currentSlide.image}
          alt={currentSlide.title}
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-[url('/assets/texture/texture.png')] bg-left bg-no-repeat opacity-[0.05]"
          aria-hidden="true"
        />

        <div className="absolute inset-0 mt-35 flex items-center px-16 xl:px-16 2xl:px-24 min-[1920px]:px-32">
          <div className="relative w-full text-left text-[#f8f1e7]">
            {/* HEADING ROW + ARROWS */}
            <div className="relative flex w-full items-center">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="absolute left-[-44px] top-1/2 z-10 -translate-y-1/2 2xl:left-[-52px] min-[1920px]:left-[-60px]"
              >
                <Image
                  src="/assets/buttons/left.png"
                  alt="Previous"
                  width={45}
                  height={45}
                  className="h-8 w-8 2xl:h-9 2xl:w-9 min-[1920px]:h-10 min-[1920px]:w-10"
                />
              </button>

              <div className="relative flex w-full items-center justify-between">
                <h1 className="translate-x-8 font-moulin text-[32px] font-medium leading-tight 2xl:text-[36px] min-[1920px]:translate-x-12 min-[1920px]:text-[40px]">
                  {currentSlide.title}
                </h1>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="absolute right-[-44px] top-1/2 z-10 -translate-y-1/2 2xl:right-[-52px] min-[1920px]:right-[-60px]"
                >
                  <Image
                    src="/assets/buttons/right.png"
                    alt="Next"
                    width={45}
                    height={45}
                    className="h-8 w-8 2xl:h-9 2xl:w-9 min-[1920px]:h-10 min-[1920px]:w-10"
                  />
                </button>
              </div>
            </div>

            {/* BODY TEXT */}
            <div className="mt-2 max-w-[650px] translate-x-8 2xl:max-w-[760px] min-[1920px]:max-w-[820px] min-[1920px]:translate-x-12">
              <p className="font-neptune text-sm leading-[150%] opacity-100 2xl:text-base min-[1920px]:text-[17px]">
                A window into a way of life where human and more-than-human world<br />
                coexist, responsibility is shared while relieving individual burden, and<br />
                selfhood is understood through care for others. Harmony is sought without<br />
                denying moments of discord, and rules are respected while allowing space<br />
                for disobedience—so the community can adapt and endure.
              </p>

              {/* SLIDE INDICATORS */}
              <div className="mt-10 flex items-center gap-2.5 2xl:mt-12 min-[1920px]:mt-14">
                {slides.map((slide, index) => (
                  <button
                    key={slide.image}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-1.5 w-1.5 rotate-45 ${
                      activeSlide === index ? "bg-[#f8f1e7]" : "bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE HERO SECTION */}
      <section className="w-full md:hidden">
        <div className="relative h-[55vh] min-h-[320px] w-full overflow-hidden">
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover"
          />

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="absolute left-12 top-1/2 z-10 -translate-y-1/2"
          >
            <Image
              src="/assets/buttons/left.png"
              alt="Previous"
              width={45}
              height={45}
              className="h-auto w-8"
            />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2"
          >
            <Image
              src="/assets/buttons/right.png"
              alt="Next"
              width={45}
              height={45}
              className="h-auto w-8"
            />
          </button>
        </div>

        <div className="flex items-center gap-2.5 bg-white px-6 pb-4 pt-10">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 w-1.5 rotate-45 border border-black ${
                activeSlide === index ? "bg-black" : "bg-black/10"
              }`}
            />
          ))}
        </div>

        <div className="relative w-full overflow-hidden bg-white px-6 pb-12 pt-5">
          <div
            className="absolute inset-0 bg-[url('/assets/texture/texture.png')] opacity-10"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <h1 className="font-moulin text-[26px] font-light leading-tight sm:text-[30px]">
              {currentSlide.title}
            </h1>

            <p className="mt-5 font-neptune text-[15px] leading-[150%] sm:text-base">
              {comfortText}
            </p>
          </div>
        </div>
      </section>

      {/* CONNECT SECTION */}
      <section className="w-full bg-[#f8f1e7] px-5 py-16 md:px-16 md:py-10 xl:px-16 2xl:px-24 2xl:py-16 min-[1920px]:px-32 min-[1920px]:py-20">
        <div className="grid w-full grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12 2xl:gap-16 min-[1920px]:gap-20">
          <h2 className="font-moulin text-[32px] font-medium leading-[150%] text-[#555] md:translate-x-8 2xl:text-[36px] min-[1920px]:translate-x-12 min-[1920px]:text-[40px]">
            Connect with the Local Legends
          </h2>

          <p className="font-neptune text-[15px] leading-[150%] sm:text-base 2xl:text-[17px] min-[1920px]:text-lg">
            ChigDil is a cooperative sanctuary with just nine elegant homestays set amidst the grandeur, beauty and spirituality of the Trans-Himalayas. In a society characterized by growing polarization, the community rotation system offers visitors a way to experience how to engage with opposites and the nuances between them to drive constructive change.
          </p>
        </div>
      </section>

      {/* COMFORT CARDS SECTION */}
      <section className="w-full overflow-x-clip bg-[#f8f1e7] pb-16 pt-0">
        <CardSlider
          paddingLeftPx={paddingLeftPx}
          itemClassName="w-[268px] shrink-0 md:w-[calc(23.66vw-49.7778px)] xl:w-[calc((100vw-256px)/4.1)] 2xl:w-[calc((100vw-256px)/4.2)] min-[1920px]:w-[calc((100vw-304px)/4.1)]"
        >
          {comfortCards.map((card) => (
            <div
              key={card.id}
              className="relative aspect-[268/425] w-full overflow-hidden"
            >
              <Image
                src={card.image}
                alt={card.name}
                fill
                quality={100}
                sizes="(max-width: 768px) 268px, 350px"
                className="object-cover"
              />
            </div>
          ))}
        </CardSlider>
      </section>

      {/* A RENEWED LIVING HERITAGE SECTION */}
      <section className="mt-0 w-full bg-[#f8f1e7] px-5 py-26 md:px-16 md:py-10 xl:px-16 2xl:px-24 2xl:py-16 min-[1920px]:px-32 min-[1920px]:py-20">
        <div className="grid w-full grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12 2xl:gap-16 min-[1920px]:gap-20">
          <h2 className="font-moulin text-[32px] font-medium tracking-tight text-[#555] md:translate-x-8 2xl:text-[36px] min-[1920px]:translate-x-12 min-[1920px]:text-[40px]">
            A Renewed Living Heritage
          </h2>

          <p className="font-neptune text-[16px] leading-[150%] tracking-wide 2xl:text-[17px] min-[1920px]:text-lg">
            in our rooms,every detail honors the land its people: hand-
            woven Chahali carpets crafted across generation,traditional ladakhi
            ceiling from local willow wood, and dzems-handmade wooden barrels
            repurposed as dustrins.Even the traditional dry toilet have beenn
            thounghfully reimagined, blending modern comfort with outhentic
          </p>
        </div>
      </section>

      {/* FULL WIDTH HALL IMAGE */}
      <section className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src="/assets/comfort/hall.png"
          alt="Hall image"
          width={1200}
          height={1200}
          unoptimized
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />

        {/* LEFT ARROW */}
        <button
          type="button"
          aria-label="Previous"
          className="absolute left-8 top-1/2 z-10 -translate-y-1/2 2xl:left-12"
        >
          <Image
            src="/assets/buttons/left.png"
            alt="Previous"
            width={45}
            height={45}
            className="h-8 w-8 2xl:h-9 2xl:w-9 min-[1920px]:h-10 min-[1920px]:w-10"
          />
        </button>

        {/* RIGHT ARROW */}
        <button
          type="button"
          aria-label="Next"
          className="absolute right-8 top-1/2 z-10 -translate-y-1/2 2xl:right-12"
        >
          <Image
            src="/assets/buttons/right.png"
            alt="Next"
            width={45}
            height={45}
            className="h-8 w-8 2xl:h-9 2xl:w-9 min-[1920px]:h-10 min-[1920px]:w-10"
          />
        </button>
      </section>
    </main>
  );
}