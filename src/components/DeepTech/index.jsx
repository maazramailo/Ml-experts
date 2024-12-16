import Deeptech1 from "@/image/CompaniesLogo/Deeptech1.webp";
import Deeptech2 from "@/image/CompaniesLogo/Deeptech2.webp";
import Deeptech3 from "@/image/CompaniesLogo/Deeptech3.webp";
import Deeptech4 from "@/image/CompaniesLogo/Deeptech4.webp";
import Image from "next/image";

export default function DeepTech() {
    const projects = [
        {
            icon: Deeptech1,
            title: "Machine Learning",
            description: "Harnessing algorithms to enhance machine learning models.",
        },
        {
            icon: Deeptech2,
            title: "Natural Language Processing (NLP)",
            description:
                "Utilizing NLP to interpret and analyze academic texts automatically.",
        },
        {
            icon: Deeptech3,
            title: "AI-driven Robotics",
            description:
                "Developing intelligent robotic systems that can learn and adapt in real-time.",
        },
        {
            icon: Deeptech4,
            title: "Predictive Analytics",
            description:
                "Applying advanced predictive models to foresee research outcomes and streamline experiments.",
        },
    ];
    return (
        <div className="flex flex-col justify-center items-center pb-16 px-2 md:px-4 lg:px-8 w-full md:w-[90%] text-start md:ps-6 gap-8 md:gap-[5rem] ">
            <div className="flex flex-col justify-center text-center items-center  gap-5 w-full ">
                <h3 className="text-[#000000] text-center text-2xl md:text-4xl lg:text-[40px] xl:leading-[55px] font-normal w-[75%] md:w-full">
                    Advanced{" "}
                    <span
                        className="font-semibold"
                        style={{
                            background:
                                "linear-gradient(100deg, #2671FF 0%, #F74C28 107.71%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Deep Tech for AI & ML
                    </span>
                </h3>
                <p className="text-center text-[#676767] font-normal text-sm xl:text-lg w-[95%] md:w-[75%] xl:leading-[32px]  md:pb-5">
                    We blend academic excellence with real-world expertise to solve tough
                    problems. From advanced AI research to scalable solutions, we turn
                    ideas into impactful innovations with precision and creativity.
                </p>
            </div>
            <div
                className="w-full  rounded-xl p-4 md:p-6"
                style={{
                    background:
                        "linear-gradient(99.81deg, rgba(38, 113, 255, 0.1) 0%, rgba(247,  76, 40, 0.1) 107.71%)",
                }}
            >
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-y-8 md:gap-x-12 justify-center items-center">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            icon={project.icon}
                            tags={project.tags}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
function ProjectCard({ icon, title, description }) {
    return (
        <div className="flex gap-2 md:gap-4 bg-white rounded-[7px] md:rounded-[14px] p-3 xl:p-4 w-full ">
            <div className="flex items-center justify-center 2xl:w-[15%] xl:w-[20%] lg:w-[10%] md:w-[15%] w-[15%]">
                <Image
                    src={icon}
                    alt={title}
                    title={title}
                    className="2xl:w-[90px] xl:w-[85px] md:w-[70px]  w-[60px] 2xl:h-[90px] xl:h-[85px] md:h-[70px] h-[50px]"
                />
            </div>
            <div className="flex flex-col justify-center gap-0 md:gap-1  text-[#0E0C0C]  2xl:w-[85%] xl:w-[80%] lg:w-[90%] md:w-[85%] w-[85%] ">
                <h3 className="font-semibold text-[10px] leading-4 md:text-xl md:leading-[33px] ">
                    {title}
                </h3>
                <p className="text-[8px] leading-[15px] md:text-base font-normal md:leading-[27px]  tracking-wide">
                    {description}
                </p>
            </div>
        </div>
    );
}
