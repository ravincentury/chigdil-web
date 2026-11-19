"use client";

import Image from "next/image";
import Link from "next/link";

export default function Quote() {
  return (
    <section className="w-full bg-[#f8f1e7] px-5 py-12 sm:px-8 md:px-16 xl:px-16 2xl:px-24 2xl:py-16 min-[1920px]:px-32 min-[1920px]:py-20">
      <div className="flex w-full flex-col justify-between gap-8 md:flex-row md:items-center md:gap-6">
        {/* Quote Text - Aligned with "More Than Just a Homestay" left edge */}
        <div className="w-full md:max-w-[650px] md:translate-x-8 2xl:max-w-[760px] min-[1920px]:max-w-[850px] min-[1920px]:translate-x-12">
          <p className="font-moulin-italic text-[16px] font-medium leading-[150%] text-[#555] 2xl:text-[18px] min-[1920px]:text-[20px]">
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
          className="block shrink-0 self-start md:self-auto"
        >
          <Image
            src="/assets/buttons/book-your-stay.png"
            alt="Book Your Stay"
            width={267}
            height={48}
            className="block h-[48.01px] w-[266.48px] object-contain"
            priority
          />
        </Link>
      </div>
    </section>
  );
}