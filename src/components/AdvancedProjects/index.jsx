"use client"
import codeBracketIcon from "@/image/AdvancedProjects/code-brackets.webp";
import codePcIcon from "@/image/AdvancedProjects/code-pc.webp";
import analyseProgramIcon from "@/image/AdvancedProjects/analysis-program.webp";
import bugIcon from "@/image/AdvancedProjects/bug.webp";
import { Tag } from "@/components/Tag";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AdvancedProject() {
    const router = useRouter();


    const projects = [
        {
            icon: codeBracketIcon,
            tags: [
                { text: "Code LLMs", variant: "green" },
                { text: "Adversarial learning", variant: "blue" },
            ],
            title: "Fine-tuning LLM Models",
            description:
                "We specialize in fine-tuning large language models (LLMs) to reason robustly about computer programs, analyzing large corpora to identify patterns and optimize algorithms.",
        },
        {
            icon: codePcIcon,
            tags: [
                { text: "Deepfakes", variant: "green" },
                { text: "Cognitive science", variant: "blue" },
            ],
            title: "Misinformation and Deepfakes",
            description:
                "Our project focuses on understanding how misinformation spread through deepfakes affects public perception, developing tools to detect and mitigate its impact.",
        },
        {
            icon: analyseProgramIcon,
            tags: [
                { text: "Program analysis", variant: "green" },
                { text: "ML", variant: "blue" },
                { text: "Concurrent programs", variant: "purple" },
            ],
            title: "AI in Legal Frameworks",
            description:
                "Leveraging AI to scrutinize legal documents, our team develops sophisticated models to detect potential loopholes in legal contracts.",
        },
        {
            icon: bugIcon,
            tags: [
                { text: "Program analysis", variant: "green" },
                { text: "ML", variant: "blue" },
                { text: "Code review", variant: "purple" },
                { text: "Software engineering", variant: "orange" },
            ],
            title: "Predicting bugs with metrics for a second",
            description:
                "We analyzed Java code using abstract interpretation metrics. Complex state joins correlated with more defects.",
        },
    ];
    return (
        <div
            className="flex flex-col justify-center items-center  px-2 md:px-4 lg:px-8 w-full md:w-[85%] text-start pb-16 md:ps-6 gap-8 "
            id="advanced_projects"
        >
            <div className="flex flex-col justify-center text-center items-center  gap-5 w-full ">
                <h3 className="text-[#000000] text-center text-2xl md:text-4xl lg:text-[40px] xl:leading-[55px] font-normal ">
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
                        AI & ML projects
                    </span>
                </h3>
                <p className="text-center text-[#676767] font-normal text-sm xl:text-lg w-[95%] md:w-[75%] xl:leading-[32px]  md:pb-5">
                    Explore some of our groundbreaking projects where advanced AI meets
                    real-world challenges.
                </p>
            </div>
            <div className="w-full  rounded-xl p-4 md:p-6">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-y-8 md:gap-x-10">
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
            <button
                className="border-[0.75px] border-[#111] py-2 px-6 md:py-3 text-[#2F2F2F] max-w-max rounded-lg font-medium"
                onClick={() => router.push("/advanced_projects")}
            >
                {" "}
                View all{" "}
            </button>
        </div>
    );
}

function ProjectCard({ icon, tags, title, description }) {
    return (
        <div
            className="flex flex-col gap-4 bg-white rounded-3xl p-6"
            style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
        >
            <div className="flex justify-between items-center">
                <Image src={icon} alt={title} title={title} className="mt-2 h-12 w-12" />
                <div className="flex gap-2 h-fit flex-wrap w-[80%] justify-end mb-auto">
                    {tags.map(({ variant, text }) => (
                        <Tag key={text} text={text} variant={variant} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-0 md:gap-2">
                <h3 className="font-semibold text-sm md:text-xl md:leading-[30px] w-[90%]">
                    {title}
                </h3>
                <p className="mt-2 text-[8px] leading-[15px] md:text-sm  md:leading-[24px] text-justify">
                    {description}
                </p>
            </div>
        </div>
    );
}
