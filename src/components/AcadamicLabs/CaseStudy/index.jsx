import Bc2 from "@/image/AcadamicPage/CaseStudies/Bcs2.webp";
import Bc3 from "@/image/AcadamicPage/CaseStudies/Bcs3.webp";
import Bc1 from "@/image/AcadamicPage/CaseStudies/Bcs1.webp";

function BottomCard() {
  const bottomCard = [
    {
      image: Bc1,
      title: "MIT CSAIL",
      alt: "ai services company",
      para: "Created a workflow for a complex robotics data-collection application in 1 month. This would have otherwise taken 3-4 months by 1 engineer. Given the critical timeline, we quickly assembled a team of Python, iOS, DevOps engineers, and one architect. They created an elaborate AWS infrastructure with auto-scaling capabilities, achieving very low latency (30 ms), and set up multiple data-collection and reporting dashboards.",
    },
    {
      image: Bc2,
      title: "Michigan State University",
      alt: "ai services company",
      para: "Working on an open-source leaderboard where researchers can submit their latest adversarial ML models. The lab did not have the bandwidth to productize and open-source such a leaderboard. We deployed a team of a senior ML engineer and a senior backend engineer.",
    },
    {
      image: Bc3,
      title: "MIT Media Lab",
      alt: "ai services company",
      para: "Developed a world-class dynamic dashboard to visualize climate discourse.",
    },
  ];

  return (
    <section className="w-[90%] md:w-[80%] mt-40 mb-20  md:mt-20 md:mb-20">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-[40px] xl:leading-[55px] font-normal text-[#000000]">
          Case{" "}
          <span
            className="font-semibold"
            style={{
              background:
                "linear-gradient(97deg, #2671FF 0.63%, #F74C28 49.93%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            studies
          </span>
        </h2>
      </div>
      <div className="flex flex-col gap-6 mt-6 md:gap-9 md:mt-9">
        {bottomCard.map((item, index) => (
          <div
            key={index}
            className="border-2 border-[#E9E9E9] md:rounded-[48px] rounded-2xl flex flex-col-reverse md:flex-row justify-between w-full py-6 md:py-12 gap-4 xl:h-[50vh]"
          >
            <div className="flex flex-col md:gap-2 xl:gap-4 justify-center xl:pl-16 p-4 md:px-8 w-full md:w-[60%]">
              <h2 className="text-xl lg:text-2xl xl:text-3xl  leading-normal text-[#575757] font-semibold tracking-wide">
                {item.title}
              </h2>
              <p className="text-xs lg:text-sm xl:text-base leading-[20px] md:w-full md:leading-normal xl:leading-[32px] text-[#424242] font-normal tracking-wider">
                {item.para}
              </p>
            </div>
            <div className="w-full md:w-[40%] flex justify-end items-center">
              <img
                src={item.image.src}
                alt={item.alt}
                title={item.alt}
                className="rounded-t-2xl md:rounded-l-none md:rounded-r-2xl md:h-[40vh] lg:h-[50vh] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BottomCard;
