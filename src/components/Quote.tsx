import Image from "next/image";
import Link from "next/link";

export default function Quote() {
  return (
    <section className="w-full bg-[#f8f1e7] px-5 py-12 sm:px-8 md:px-16 xl:px-16 2xl:px-20 2xl:py-16 min-[1920px]:px-28 min-[1920px]:py-20">

      <div className="mx-auto flex w-full max-w-[1168.16px] min-h-[48.01px] flex-col items-center justify-between gap-8 md:flex-row md:items-center md:gap-0">

        {/* Quote Text */}
        <div className="w-full md:max-w-[650px] 2xl:max-w-[760px] min-[1920px]:max-w-[850px]">

          <p className="font-moulin-italic font-medium text-[16px] leading-[150%] text-[#555] 2xl:text-[18px] min-[1920px]:text-[20px]">
            “Ironically, tourists helped us Ladakhis understand our own unique traditions.”
          </p>

          <p className="mt-1 font-neptune text-sm text-[#555] 2xl:text-base min-[1920px]:text-lg">
            — Tsering Motup Siddho
          </p>

        </div>

        {/* Book Your Stay */}
        <Link
          href="/booking"
          aria-label="Book Your Stay"
          className="block shrink-0 self-center md:self-auto"
        >
          <Image
            src="/assets/buttons/book-your-stay.png"
            alt="Book Your Stay"
            width={220}
            height={60}
            className="block h-[48.01px] w-[266.48px] object-fill"
            priority
          />
        </Link>

      </div>
    </section>
  );
}