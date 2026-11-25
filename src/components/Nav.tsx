"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Comfort", href: "/comfort" },
  { label: "Climate", href: "/climate" },
  { label: "Cuisine", href: "/cuisine" },
  { label: "Craft", href: "/craft" },
  { label: "Care", href: "/care" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isComfortPage = pathname === "/comfort";

  const textColor = isComfortPage ? "text-[#272727]" : "text-[#F8F1E7]";

  const mobileMenuBg = isComfortPage ? "bg-[#F8F1E7]" : "bg-[#282522]";

  return (
    <header className="absolute z-50 w-full bg-transparent">
      <nav className="relative z-50 flex min-h-[100px] w-full items-center justify-between px-5 sm:px-8 md:px-12 lg:px-20 xl:px-22 2xl:px-29 min-[1070px]:grid min-[1070px]:grid-cols-12">
        {/* Logo + Brand */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 min-[1070px]:col-span-4">
          {/* Logo */}
          <Link
            href="/"
            aria-label="ChigDil home"
            onClick={() => setMenuOpen(false)}
            className="relative z-10 flex shrink-0 items-center"
          >
            <Image
              src="/assets/desktop/logo/ChigDil.png"
              alt="ChigDil Homestays Logo"
              width={118}
              height={179}
              unoptimized
              className="h-[122.87px] w-[81px] object-contain min-[1070px]:h-[179px] min-[1070px]:w-[118px]"
            />
          </Link>

          {/* Brand Name */}
          <div
            className={`-translate-y-7 flex items-center gap-1 whitespace-nowrap min-[1070px]:-translate-y-12 ${textColor}`}
          >
            <span className="font-moulin text-[13px] font-medium leading-none min-[1070px]:text-[16px]">
              ChigDil
            </span>

            <span
              aria-hidden="true"
              className="font-moulin -translate-y-0.5 text-[6px] leading-none min-[1070px]:-translate-y-1 min-[1070px]:text-[7px]"
            >
              ◆
            </span>

            <span className="font-moulin text-[13px] font-normal leading-none min-[1070px]:text-[16px]">
              Rumbak Homestays
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div
          className={`hidden min-[1070px]:col-span-8 min-[1070px]:flex -translate-y-12 shrink-0 items-center justify-end gap-5 xl:gap-9 ${textColor}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap font-neptune text-[16px] font-light leading-none hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/booking"
            className="whitespace-nowrap font-neptune text-[16px] font-light leading-none hover:opacity-60"
          >
            Book Your Stay
          </Link>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={`-translate-y-7 flex h-10 w-10 shrink-0 items-center justify-center text-3xl font-light min-[1070px]:hidden ${textColor}`}
        >
          {menuOpen ? "×" : "+"}
        </button>
      </nav>

      {/* Mobile / Tablet Fullscreen Menu (Smooth Fade-in / Fade-out like video) */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 flex min-h-screen w-full flex-col justify-center px-6 pt-24 pb-12 transition-opacity duration-700 ease-in-out min-[1070px]:hidden ${mobileMenuBg} ${textColor} ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex w-full flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="w-full border-b-2 border-[#AA391C] py-4 font-neptune text-[17px] font-normal"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/booking"
            onClick={() => setMenuOpen(false)}
            className="w-full border-b-2 border-[#AA391C] py-4 font-neptune text-[17px] font-normal"
          >
            Book Your Stay
          </Link>
        </div>
      </div>
    </header>
  );
}