"use client";

import { useRouter, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Linkedin from "@/image/Home/Linkedin.svg";
import MLLogo from "@/image/Home/MLLogo.png";
import { useHash } from "@/Hooks/useHash";
import { scrollToSection } from "@/util";

export default function Footer() {
  const navigate = useRouter();
  const pathname = usePathname();

  const hash = useHash();
  useEffect(() => {
    const section = hash.replace("#", "");
    if (section) scrollToSection(section);
  }, [hash]);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    navigate.push(link);
  };
  const menu = [
    { href: "/", title: "Home", link: "/#home" },
    { href: "/#Services", title: "Services", link: "/#services" },
    { href: "/#case-studies", title: "Case studies", link: "/#case-studies" },
    { href: "/blogs", title: "Advanced Projects", link: "/advanced_projects" },
  ];
  return (
    <section className="pt-0  w-full bg-[#111111] text-white">
      <div className=" pt-12 pb-4  mt-8 ">
        <div className=" flex md:flex-row flex-col text-center md:text-start justify-between  items-center gap-8 md:w-[90%] mx-auto">
          <div className="flex flex-col gap-4">
            <p className="text-[#E5E5E5] font-light">
              Let's Innovate Together{" "}
            </p>

            {pathname === "/uni" ? (
              <h2 className="text-white text-xl md:text-2xl  md:w-[60%]  lg:text-3xl font-normal ">
                All engineering needs for your lab under one roof for faster
                go-live
              </h2>
            ) : (
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-normal ">
                Contact us to transform <br />
                your AI capabilities
              </h2>
            )}
          </div>
        </div>
      </div>
      <div className=" md:w-[90%] mx-auto py-10 flex flex-col gap-3">
        {pathname === "/electoral-bonds" && (
          <div className=" flex md:justify-start md:text-start sm:text-center text-center sm:justify-center justify-center md:p-0 sm:p-3 p-3 ">
            <a href="/electoral-bonds/method" alt="" title="Electoral-bond">
              <p>
                <span className="text-blue-500 underline cursor-pointer">
                  Click here
                </span>
                &nbsp;to read more about how this data was assembled.
              </p>
            </a>
          </div>
        )}
        <div className="flex flex-col md:flex-row justify-between text-center items-center gap-6  md:gap-2">
          <div className="w-full flex justify-center md:justify-start items-center  ">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
              title="Home page"
            >
              <div className="flex md:justify-start justify-center  items-center w-full md:w-[40%]">
                <img
                  src={MLLogo.src}
                  alt="MLLogo"
                  title="MLLogo"
                  className="w-[20%] md:w-[40%]"
                />
                <p className="text-white font-semibold text-lg">MLExperts.ai</p>
              </div>
            </a>
          </div>

          <div>
            <nav className="flex flex-col md:flex-row gap-8 md:gap-5  ">
              {menu.map(({ href, title, link }) => (
                <a
                  key={title}
                  href={href}
                  className="hover:underline hover:text-[#FF8F24] whitespace-nowrap"
                  title={title}
                  onClick={(e) => handleLinkClick(e, link)}
                >
                  {title}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <hr className="border-1 border-[#949494] mt-4 hidden md:block" />
        <div className="flex flex-col-reverse gap-6  md:flex-row justify-between items-center md:mt-4 mt-8">
          <div className=" flex flex-col-reverse text-center md:text-start md:flex-row gap-6 md:gap-4">
            <p>© 2024 Ramailo Tech. All rights reserved.</p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-4">
              <a href="#" className="hover:underline" title="Privacy Policy">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline" title="Terms of Service">
                Terms of Service
              </a>
              {/* <a href="#" className="underline">
                Cookies Settings
              </a> */}
            </div>
          </div>
          <div className="bg-[#949494] h-[1px] w-full block md:hidden" />
          <div className=" flex ">
            <a
              href="https://www.linkedin.com/company/ml-exp/"
              target="blank"
              title="LinkedIn - url"
            >
              <img src={Linkedin.src} alt="linkedin" title="linkedin" />
            </a>

            {/* <img src={Facebook} alt="facebook" /> */}
          </div>
        </div>
        <div className="flex w-full md:justify-start md:items-start justify-center items-center md:ml-[-4rem]">
          <div
            className="trustpilot-widget bg-[#0A0D15] text-[#E5E5E5s]"
            data-locale="en-GB"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="6600cd081c759c1e5a582168"
            data-style-height="52px"
            data-style-width="max-content"
          >
            <a
              href="https://uk.trustpilot.com/review/mlexperts.ai"
              target="_blank"
              rel="noopener"
              title="Trustpilot"
              className="bg-[#0A0D15] text-[#E5E5E5s]"
            >
              Trustpilot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
