"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import MLLogo from "@/image/Home/MLLogo.png";

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = usePathname();

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);

  const handleMouseEnter = () => {
    setButtonBgColor("bg-gradient-to-r from-[#2671FF] to-[#F74C28]");
  };

  const handleMouseLeave = () => {
    setButtonBgColor("bg-gradient-to-r from-[#F74C28] to-[#2671FF]");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    router.push(link);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const sections = [
      homeRef.current,
      servicesRef.current,
      portfolioRef.current,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {});
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const menu = [
    {
      name: "Home",
      link: "/#home",
      hash: "#home",
      isMob: true,
      isDesktop: true,
    },
    {
      name: "Services",
      link: "/#services",
      hash: "#services",
      isMob: true,
      isDesktop: true,
    },
    {
      name: "Case studies",
      link: "/#case-studies",
      hash: "/#case-studies",
      isMob: true,
      isDesktop: true,
    },
    {
      name: "Advanced Projects",
      link: "/advanced_projects",
      hash: "/advanced_projects",
      isMob: true,
      isDesktop: true,
    },
    {
      name: "Blog",
      link: "/blog",
      hash: "/blog",
      isMob: false,
      isDesktop: false,
    },
    {
      name: "Contact us",
      link: "/contactus",
      hash: "/contactus",
      isMob: true,
      isDesktop: false,
    },
  ];

  return (
    <div className="fixed shadow-lg top-0 left-0 right-0 bg-[#111111] z-[1000]">
      <div className="flex justify-between items-center bg-[#111111] px-4 lg:px-8 py-4">
        {/* Logo Section */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img
            src={MLLogo.src}
            alt="ML Logo"
            title="ML Logo"
            className="w-12"
          />
          <p className="text-[#fff] font-semibold text-lg">MLExperts.ai</p>
        </div>

        <div className="flex items-center">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
            {menu
              .filter((item) => item.isDesktop)
              .map(({ name, link }) => (
                <div
                  key={name}
                  className={`cursor-pointer ${
                    location === link
                      ? "text-[#FF8F24] font-semibold"
                      : "text-[#fff] hover:text-[#FF8F24] hover:font-semibold"
                  }`}
                  onClick={(e) => handleLinkClick(e, link)}
                >
                  {name}
                </div>
              ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <button
            className="rounded-lg px-4 py-2 text-white transition-all duration-500 bg-gradient-to-r from-[#F74C28] to-[#2671FF] hover:from-[#2671FF] hover:to-[#F74C28]"
            onClick={() => router.push("/contactus")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Contact us
          </button>
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
            >
              <path
                d="M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-6 absolute top-16 right-0 w-full z-10">
          <div className="flex flex-col space-y-8">
            {menu
              .filter((item) => item.isMob)
              .map(({ name, link }) => (
                <a
                  key={name}
                  href={link}
                  className={`cursor-pointer ${
                    location === link
                      ? "text-black font-semibold"
                      : "text-black"
                  }`}
                  onClick={(e) => handleLinkClick(e, link)}
                >
                  {name}
                </a>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}