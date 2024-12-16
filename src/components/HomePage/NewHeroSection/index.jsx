"use client"
import Hero1 from "@/image/Home/NewLandingPage.webp";
import ArrowRight from "@/image/Home/guidance_up-arrow.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NewHeroSection() {
    const router = useRouter();

    return (
        <div
            id="home"
            className="flex items-center justify-center w-full h-[70vh] md:h-[100vh]"
            style={{
                background: `url(${Hero1.src}) no-repeat center center / cover`,
            }}
        >
            <div className="container px-4 lg:px-8 flex justify-center items-center">
                <div className="flex flex-col items-center justify-center text-center gap-2">
                    <h4 className="text-white text-lg md:text-3xl mt-[7rem] xl:text-[50px] text-center w-full md:w-[70%] md:leading-12 xl:leading-[63px]  xl:w-[90%] font-bold tracking-wide">
                        Leading AI & ML consulting in <br />
                        <span className="text-[#FF8F24]"> deep tech innovation </span>
                    </h4>

                    <p className="pt-5 text-[#FFFFFFCC] font-normal text-[10px] leading-[16px] md:text-base xl:text-lg tracking-wide w-full md:w-[90%] lg:w-[80%] xl:w-[65%] text-center">
                        Harness cutting-edge <span className=" inline">AI and ML</span>{" "}
                        technologies to transform academic and industry research.
                    </p>

                    <div className="mt-10 flex justify-end gap-10">
                        <button
                            className="px-4 md:px-8 py-2 flex items-center gap-2 text-white border-2 border-white rounded-3xl shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-shadow duration-600 hover:bg-[#FF8F24] text-xs md:text-sm xl:text-base bg-black"
                            onClick={() => router.push("/contactus")}
                        >
                            Write to us
                            <span className="flex justify-end">
                                <Image
                                    src={ArrowRight}
                                    alt="ai ml consulting company"
                                    title="ArrowRight"
                                    className="w-[70%] xl:w-full"
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
