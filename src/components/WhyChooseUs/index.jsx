import React from "react";
import { useRouter } from "next/navigation";
import Google from "@/image/CompaniesLogo/Google.webp";
import Meta from "@/image/CompaniesLogo/Meta.webp";
import Amazon from "@/image/CompaniesLogo/AmazonLogo.webp";
import Samsung from "@/image/CompaniesLogo/SamsungLogo.webp";
import MitLogo from "@/image/CompaniesLogo/MitLogo.webp";
import Harvard from "@/image/CompaniesLogo/Havard2.webp";
import Rutger from "@/image/CompaniesLogo/Rutger.webp";
import MitLab from "@/image/CompaniesLogo/MitLab.webp";
import MitInstitute from "@/image/CompaniesLogo/MitInstitute.webp";
import Michin from "@/image/CompaniesLogo/MichiganLogo.webp";
import Image from "next/image";


function Wcu() {
    const router = useRouter();

    const academicProjects = [
        { src: MitLab, alt: "MitLab", title: "MitLab" },
        { src: MitInstitute, alt: "MitInstitute", title: "MitInstitute" },
        { src: Michin, alt: "Michigan", title: "Michigan" },
    ];

    const academicProjectsRow2 = [
        { src: Rutger, alt: "Rutger", title: "Rutger" },
        { src: Harvard, alt: "Harvard", title: "Harvard" },
    ];

    const techGiants = [
        {
            src: Google,
            alt: "google",
            title: "google",
            className: "xl:w-[80%] w-[85%]",
        },
        { src: Meta, alt: "meta", title: "meta", className: "xl:w-[80%] w-[85%]" },
        {
            src: Amazon,
            alt: "amazone",
            title: "amazone",
            className: "xl:w-[80%] w-[85%]",
        },
    ];

    const techGiantsRow2 = [
        {
            src: Samsung,
            alt: "samsung",
            title: "samsung",
            className: "xl:w-[90%] w-[95%]",
        },
        { src: MitLogo, alt: "mit", title: "mit", className: "xl:w-[90%] w-[95%]" },
    ];

    const gradientTextStyle = {
        background: "linear-gradient(100deg, #2671FF 0%, #F74C28 107.71%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    };

    const gradientBgStyle = {
        background:
            "linear-gradient(100deg, rgba(38, 113, 255, 0.20) 0%, rgba(247, 76, 40, 0.20) 107.71%)",
    };

    return (
        <div className="xl:my-[6rem] text-center w-[90%] md:w-[80%] flex flex-col gap-9 pb-16">
            <div className="flex flex-col justify-center text-center items-center gap-5 w-full">
                <h2 className="text-[#000000] text-2xl md:text-4xl lg:text-[40px] xl:leading-[55px] font-normal">
                    Why{" "}
                    <span className="font-semibold" style={gradientTextStyle}>
                        choose us?
                    </span>
                </h2>
            </div>

            {/* First Section */}
            <div className="w-full border-2 border-[#EBDEFF] rounded-2xl gap-2 md:gap-4 xl:gap-8 flex flex-col md:flex-row">
                <div className="w-full md:w-[55%] text-left p-4 py-8 md:py-0 md:p-6 xl:p-10 pt-8 flex justify-center flex-col gap-2 xl:gap-4 xl:pl-15">
                    <h3 className="w-full py-2 md:pb-0 text-start text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-normal xl:leading-[50px] font-normal tracking-wider">
                        Expertise in{" "}
                        <span className="font-semibold" style={gradientTextStyle}>
                            Deep Tech and Advanced AI projects
                        </span>
                    </h3>
                    <p className="text-[10px] lg:text-base xl:text-xl w-full leading-[18px] lg:leading-[28px] xl:leading-[33px] text-[#676767] font-normal tracking-wide mt-2 md:mt-0 md:w-[90%]">
                        Our proven track record in advanced AI ML projects sets us apart as
                        a leading ML consulting services provider, ready to tackle complex
                        challenges and deliver cutting-edge solutions.
                    </p>
                </div>

                <div
                    className="w-full md:w-[45%] flex flex-col justify-center items-center p-5 rounded-b-2xl md:min-h-[25vh] xl:min-h-[38vh]  md:rounded-l-none md:rounded-r-2xl"
                    style={gradientBgStyle}
                >
                    <div className="grid grid-cols-3 justify-center items-center gap-4 p-5">
                        {academicProjects.map((item, index) => (
                            <Image
                                key={index}
                                src={item.src}
                                alt={item.alt}
                                title={item.title}
                            />
                        ))}
                    </div>

                    <div className="grid grid-cols-2 w-[60%] items-center gap-4 mb-5">
                        {academicProjectsRow2.map((item, index) => (
                            <Image
                                key={index}
                                src={item.src}
                                alt={item.alt}
                                title={item.title}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="w-full border-2 border-[#EBDEFF] rounded-2xl gap-2 xl:gap-8 flex flex-col-reverse md:flex-row">
                <div
                    className="w-full md:w-[45%] flex flex-col justify-center p-5 items-center rounded-b-2xl md:min-h-[25vh] xl:min-h-[38vh] md:rounded-tr-none md:rounded-l-2xl md:rounded-br-none"
                    style={gradientBgStyle}
                >
                    <div className="grid grid-cols-3 items-center gap-4">
                        {techGiants.map((item, index) => (
                            <Image
                                key={index}
                                src={item.src}
                                alt={item.alt}
                                title={item.title}
                                className={item.className}
                            />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 w-[60%] items-center gap-4">
                        {techGiantsRow2.map((item, index) => (
                            <Image
                                key={index}
                                src={item.src}
                                alt={item.alt}
                                title={item.title}
                                className={item.className}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-[55%] text-left p-4 md:p-6 xl:p-10 flex flex-col justify-center md:gap-2 xl:gap-4 pt-6 xl:pl-12">
                    <h3 className="w-full py-2 md:pb-0 text-start text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-normal font-normal tracking-wider">
                        <span className="font-semibold" style={gradientTextStyle}>
                            Expert
                        </span>{" "}
                        team
                    </h3>
                    <p className="text-[10px] lg:text-base xl:text-xl w-full leading-[18px] lg:leading-[28px] xl:leading-[33px] text-[#676767] font-normal tracking-wide mt-3 md:mt-0">
                        Our team consists of experts from Google, Meta, Amazon, Samsung,
                        MIT.
                    </p>
                    <p className="text-[10px] lg:text-base xl:text-xl w-full leading-[18px] lg:leading-[28px] xl:leading-[33px] text-[#676767] font-normal tracking-wide mt-2 md:mt-0">
                        With first hand knowledge of the challenges, we are well-equipped to
                        tackle real-world problems in lab environments.
                    </p>
                </div>
            </div>

            {/* Contact Button */}
            <div>
                <button
                    className="rounded-lg px-4 py-2 transition ease-in-out delay-150 text-white  duration-700 bg-gradient-to-r from-[#F74C28] to-[#2671FF] hover:from-[#2671FF] hover:to-[#F74C28]"
                    onClick={() => router.push("/contactus")}
                >
                    Contact us
                </button>
            </div>
        </div>
    );
}

export default Wcu;
