import Hero1 from "@/image/Home/ActionSectionBg.webp";
import { useRouter } from "next/navigation";

export default function ActionSection() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center xl:w-[80%] w-[95%] h-[20vh] xl:h-[60vh] ">
            <div
                className=" flex flex-col md:bg-cover gap-3 py-3 md:py-5 md:gap-3 h-[15vh] md:h-[20vh] lg:h-[45vh] w-[90%] xl:w-full justify-center items-center rounded-xl md:rounded-2xl xl:rounded-[3rem]"
                style={{
                    background: `url(${Hero1.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <h2 className="font-poppins text-white text-xs md:text-base xl:text-4xl 2xl:text-[40px] 2xl:leading-[63px] px-2 2xl:py-10 text-center w-full md:w-[70%] leading-5 md:leading-7 xl:w-[60%] xl:leading-[1.3] font-normal tracking-wide">
                    Ready to leverage AI and ML for your{" "}
                    <span className="font-bold inline">advanced research?</span>
                </h2>
                {/* Contact Button */}
                <div>
                    <button
                        className="rounded-full px-4 xl:px-8 py-2 xl:py-4 text-[10px] md:text-sm 2xl:text-lg text-white transition-all duration-500 bg-gradient-to-r from-[#F74C28] to-[#2671FF] hover:from-[#2671FF] hover:to-[#F74C28]"
                        onClick={() => router.push("/contactus")}
                    >
                        Contact us now
                    </button>
                </div>
            </div>
        </div>
    );
}
