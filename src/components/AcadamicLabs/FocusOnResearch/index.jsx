"use client";
import Acadamic from "@/image/AcadamicPage/Focus/Component 2.webp";

export default function FocusOnResearch() {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 items-center   px-2 md:px-4 lg:px-8 w-full md:w-[90%] text-start py-10 md:ps-6 gap-8 md:h-screen ">
      <div className="flex flex-col gap-4 items-center md:items-start w-full">
        <h2 className="text-2xl w-full  md:text-3xl lg:text-[40px] xl:leading-[55px] py-2 md:py-4 text-center md:text-left leading-[40px] md:leading-[36px] md:w-[80%] ">
          Focus on research <br className="hidden md:block" />
          <span
            className="font-semibold "
            style={{
              background:
                "linear-gradient(100deg, #2671FF 0%, #F74C28 107.71%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            let AI ML experts handle the rest
          </span>
        </h2>
        <p className="text-center text-[#343434] font-normal md:text-left text-sm xl:text-lg w-[95%] md:w-[80%] xl:w-[70%] md:pb-5">
          While core research is essential, engineering tasks can take months to
          implement and may require learning new skills, potentially delaying
          project completion. Focusing on peripheral systems might not be the
          best use of your valuable time.
        </p>
        <span className="text-center text-[#343434] font-normal md:text-left text-sm xl:text-lg w-[95%] md:w-[80%] xl:w-[70%] xl:pb-8">
          That’s where our team of{" "}
          <h1 className="inline">research software engineers</h1> comes in. We
          help you offload these tasks, ensuring that you can concentrate on
          what truly matters—advancing your research.
        </span>
      </div>
      <div className=" justify-center w-full">
        <img
          src={Acadamic.src}
          alt="machine learning in research"
          title="Research project with a software component"
        />
      </div>
    </section>
  );
}
