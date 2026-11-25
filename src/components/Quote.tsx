"use client";

import Image from "next/image";
import Link from "next/link";

export default function Quote() {
  return (
    <section className="w-full bg-[#f8f1e7] px-5 py-10 sm:px-8 md:px-16 md:py-12 xl:px-16 2xl:px-24 2xl:py-16 min-[1920px]:px-32 min-[1920px]:py-20">
      <div className="flex w-full flex-col justify-between gap-7 md:flex-row md:items-center md:gap-6">
        {/* Quote Text - Aligned with "More Than Just a Homestay" left edge */}
        <div className="w-full md:max-w-[650px] md:translate-x-8 2xl:max-w-[760px] min-[1920px]:max-w-[850px] min-[1920px]:translate-x-12">
          <p className="font-moulin-italic text-[14px] font-medium leading-[155%] text-[#555] sm:text-[15px] md:text-[16px] md:leading-[150%] 2xl:text-[18px] min-[1920px]:text-[20px]">
            “Ironically, tourists helped us Ladakhis understand our own unique traditions.”
          </p>

          <p className="mt-2 font-neptune text-[12px] text-[#555] sm:text-[13px] md:mt-1 md:text-sm 2xl:text-base min-[1920px]:text-lg">
            — Tsering Motup Siddho
          </p>
        </div>

        {/* Book Your Stay */}
        <Link
          href="/booking"
          aria-label="Book Your Stay"
          className="block w-full max-w-[359.49px] shrink-0 self-start md:w-auto md:max-w-none md:self-auto"
        >
          <Image
            src="/assets/buttons/book-your-stay.png"
            alt="Book Your Stay"
            width={267}
            height={48}
            className="block h-[46px] w-full object-fill sm:h-[50px] md:h-[48.01px] md:w-[266.48px] md:object-contain"
            priority
          />
        </Link>
      </div>
    </section>
  );
}