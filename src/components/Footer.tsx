import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative isolate w-full overflow-hidden text-[#f8f1e7]">
      {/* 1A. Desktop Footer Background Image */}
      <div className="absolute inset-0 -z-10 max-md:hidden">
        <Image
          src="/assets/desktop/footer/footer-background.png"
          alt="Footer background"
          fill
          priority
          unoptimized
          quality={100}
          sizes="100vw"
          className="object-fill"
        />
      </div>

      {/* 1B. Mobile Footer Background Image (Figma export) */}
      <div className="absolute inset-0 -z-10 md:hidden">
        <Image
          src="/assets/mobile/footer/footer.png"
          alt="Mobile footer background"
          fill
          priority
          unoptimized
          quality={100}
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* Footer Main Content */}
      <div className="relative mx-auto min-h-[304.42px] w-full pb-8 max-md:flex max-md:min-h-[670px] max-md:flex-col max-md:justify-between max-md:pb-0 md:min-h-[300.42px] min-[1920px]:min-h-[304.42px]">
        {/* TOP CONTENT BLOCK */}
        <div className="max-md:px-6 max-md:pt-14">
          {/* Stay at Rumbak - Moved closer to Join our community */}
          <div className="md:absolute md:right-[380px] md:top-[29%] 2xl:right-[420px] 2xl:top-[27%] min-[1920px]:right-[460px] min-[1920px]:top-[26%]">
            <h3 className="font-moulin text-[16px] text-[#f2dfc3] 2xl:text-[18px] min-[1920px]:text-[20px]">
              Stay at Rumbak
            </h3>

            <p className="mt-1 block font-neptune text-[16px] text-[#f2dfc3] 2xl:text-[18px] min-[1920px]:text-[20px]">
              chigdil.rumbak@gmail.com
            </p>

            <p className="mt-1 block font-neptune text-[16px] text-[#f2dfc3] 2xl:text-[18px] min-[1920px]:text-[20px]">
              +91 9469-451132
            </p>
          </div>

          {/* Join Our Community - Left aligned with Book Your Stay button */}
          <div className="max-md:mt-8 max-md:w-full md:absolute md:right-16 md:top-[29%] md:w-[266.48px] 2xl:right-24 2xl:top-[27%] min-[1920px]:right-32 min-[1920px]:top-[26%]">
            <h3 className="font-moulin text-[16px] text-[#f2dfc3] 2xl:text-[18px] min-[1920px]:text-[20px]">
              Join our community
            </h3>

            <form className="mt-3 flex w-full items-center border-b border-[#f2dfc3] pb-1 2xl:mt-4 min-[1920px]:mt-5">
              <input
                type="email"
                placeholder="Enter your mail"
                className="min-w-0 flex-1 bg-transparent font-neptune text-[14px] text-[#f2dfc3] outline-none placeholder:text-[#f8f1e7] opacity-70 2xl:text-[15px] min-[1920px]:text-[17px]"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="ml-2 font-neptune text-[20px] text-[#f2dfc3] 2xl:text-[22px] min-[1920px]:text-[22px]"
              >
                →
              </button>
            </form>
          </div>

          {/* 4. WhatsApp, 5. Instagram & Copyright (Same row on mobile) */}
          <div className="max-md:mt-14 max-md:flex max-md:w-full max-md:items-center max-md:justify-between">
            <div className="flex items-center gap-7 md:absolute md:right-16 md:top-[72%] md:w-[266.48px] 2xl:right-24 2xl:gap-8 min-[1920px]:right-32 min-[1920px]:gap-10">
              <a
                href="https://wa.me/919469451132"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <Image
                  src="/assets/buttons/whatsapp.png"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                  className="h-[25px] w-[25px] object-contain 2xl:h-[28px] 2xl:w-[28px] min-[1920px]:h-[32px] min-[1920px]:w-[32px]"
                />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/assets/buttons/instagram.png"
                  alt="Instagram"
                  width={28}
                  height={28}
                  className="h-[25px] w-[25px] object-contain 2xl:h-[28px] 2xl:w-[28px] min-[1920px]:h-[32px] min-[1920px]:w-[32px]"
                />
              </a>
            </div>

            {/* Copyright */}
            <p className="font-neptune text-[12px] text-[#f8f1e7] opacity-50 md:absolute md:bottom-[19%] md:right-16 2xl:right-24 2xl:text-[13px] min-[1920px]:right-32 min-[1920px]:text-[15px]">
              @chigdil 2026
            </p>
          </div>
        </div>

        {/* BOTTOM ILLUSTRATIONS (Flower left + Leopard right on mobile) */}
        <div className="max-md:mt-10 max-md:flex max-md:w-full max-md:items-end max-md:justify-between max-md:px-4">
          {/* 2. Flower Image - Untouched */}
          <div className="max-md:w-[100px] max-md:shrink-0 md:absolute md:bottom-0 md:left-[4.5%] md:w-[110px] 2xl:w-[125px] min-[1920px]:w-[145px]">
            <Image
              src="/assets/footer/flower.png"
              alt="Flower"
              width={203}
              height={150}
              className="h-auto w-full object-contain"
            />
          </div>

          {/* 3. Leopard Image - Untouched */}
          <div className="max-md:mb-8 max-md:w-[66%] max-md:max-w-[255px] md:absolute md:left-[11.5%] md:top-[10%] md:w-[265px] 2xl:w-[290px] min-[1920px]:w-[320px]">
            <Image
              src="/assets/footer/leopard.png"
              alt="Leopard"
              width={255}
              height={222}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}