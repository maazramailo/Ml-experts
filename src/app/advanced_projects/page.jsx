import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import codeBracketIcon from "@/image/AdvancedProjects/code-brackets.webp";
import codePcIcon from "@/image/AdvancedProjects/code-pc.webp";
import analyseAlgorithmIcon from "@/image/AdvancedProjects/analysis-algorithm.png";
import analyseProgramIcon from "@/image/AdvancedProjects/analysis-program.webp";
import arrowSpinIcon from "@/image/AdvancedProjects/arrow-spin.png";
import bugIcon from "@/image/AdvancedProjects/bug.png";
import deepFakesIcon from "@/image/AdvancedProjects/deepfakes.png";
import { Tag } from "@/components/Tag";
import Image from "next/image";

const programAnalysisProjects = [
    {
        icon: codeBracketIcon,
        tags: [
            { text: "Code LLMs", variant: "green" },
            { text: "Adversarial learning", variant: "blue" },
        ],
        title: "Fine-tune LLM models to reason robustly about computer programs",
        description:
            'We worked on making computer programs more resistant to AI deception. AI models like LLMs can generate programs but can be tricked by cleverly disguised code. We developed a method to create these disguises, called "obfuscations," which change how a program looks without altering its function. By strategically applying these changes, we created programs that AI struggles to analyze, helping us identify weaknesses in the AI and improve its ability to handle deceptive code.',
    },
    {
        icon: codePcIcon,
        tags: [
            { text: "Vector representation of programs", variant: "green" },
            { text: "Code pattern discovery", variant: "blue" },
            { text: "Code search", variant: "purple" },
            { text: "Code similarity analysis", variant: "orange" },
        ],
        title: "Analyze large corpora of computer programs for patterns",
        description:
            "We used machine learning to classify code lines as vulnerable or not. To do this, we created a deep learning model that captures control and data dependencies, allowing for better representation of program meaning. Our model outperformed traditional classifiers, demonstrating the effectiveness of deep learning in modeling program structure. This approach can be applied to various tasks like code pattern discovery, search, and similarity analysis.",
    },
    {
        icon: analyseProgramIcon,
        tags: [
            { text: "Program analysis", variant: "green" },
            { text: "ML", variant: "blue" },
            { text: "Concurrent programs", variant: "purple" },
        ],
        title:
            "Use AI to discover new dynamic race detection heuristics for concurrent programs",
        description:
            "We developed an SMT-based approach to generate program traces with injected data races in any given concurrent program. Using these traces, we found counterexamples that state-of-the-art race detection algorithms missed. The generated traces can be used to learn patterns behind data races, thus improving upon extant methods which rely on engineering elaborate heuristics.",
    },
    {
        icon: bugIcon,
        tags: [
            { text: "Program analysis", variant: "green" },
            { text: "ML", variant: "blue" },
            { text: "Code review", variant: "purple" },
            { text: "Software engineering", variant: "orange" },
        ],
        title: "Predicting the presence of bugs using program analysis metrics",
        description:
            "We looked at a large number of Java repositories and used code review data on past bugs and fixes. Our goal was to see if program analysis metrics, particularly from abstract interpretation, could predict bugs. We found that more complex join operations in abstract states were associated with a higher chance of bugs. We used Facebook's Infer, a static analysis tool, to gather these metrics and developed predictive models to improve code quality and reduce bugs in Java projects.",
    },
];

const interpretabilityOfAIModelsProjects = [
    {
        icon: codeBracketIcon,
        tags: [{ text: "Mechanistic interpretability", variant: "blue" }],
        title: "Explaining LLM model behavior",
        description:
            "We wanted to see if large language models (LLMs) can learn to process grammar like humans do. Humans are naturally good at understanding hierarchical structures in language, so we tested if LLMs could do the same after being trained on lots of text. We found that LLMs performed better with hierarchical grammar than with linear grammar. When we looked closer, we saw that different parts of the LLMs were handling each type of grammar. Disabling those parts made the LLMs less accurate. This shows that LLMs can learn specialized grammar processing just from reading text.",
    },
    {
        icon: analyseAlgorithmIcon,
        tags: [{ text: "Algorithmic biases", variant: "green" }],
        title: "Analyze biases in large scale automated algorithms",
        description:
            "We studied how Facebook's ad delivery algorithms impact climate-related ads and found that the algorithms might influence who sees these ads based on U.S. state, gender, or age. We also discovered that climate contrarians, especially in oil-producing states, receive a cost advantage in ad pricing. This suggests that the algorithms may skew ad delivery, potentially affecting audience targeting and shaping attitudes toward climate action.",
    },
    {
        icon: deepFakesIcon,
        tags: [
            { text: "Deepfakes", variant: "green" },
            { text: "Cognitive science", variant: "blue" },
        ],
        title: "How do people consume misinformation spread via deepfakes?",
        description:
            "We studied whether people can tell real political speeches from deepfakes, especially with advances in realistic visual effects. We tested participants by showing them speeches in different formats: text, audio, and video. We found that people were better at identifying real speeches when they had both audio and video, relying more on how the speech was delivered rather than the actual content. However, those who scored lower on a reflection test tended to focus too much on the speech content, which affected their accuracy in spotting the fake.",
    },
];

const automatedReasoningOfDocumentProjects = [
    {
        icon: arrowSpinIcon,
        tags: [
            { text: "SMT solvers", variant: "green" },
            { text: "AI", variant: "blue" },
            { text: "Legal contracts", variant: "purple" },
        ],
        title: "AI for finding loopholes in legal contracts",
        description:
            "We used SMT (Satisfiability Modulo Theories) solvers to find loopholes in legal contracts. First, we convert the contract into a formal program that captures its terms and conditions. Then, we define specific loophole conditions as assertions in the program. The SMT solver helps us identify inputs that violate these assertions, revealing potential loopholes. This method automates contract analysis, ensuring that legal documents are strong and free from exploitable gaps.",
    },
];

const AdvancedProjects = () => {
    return (
        <div className=" flex flex-col justify-center items-center">

            <ScrollToTop />
            <div className="mt-28 p-4 lg:p-8 w-full md:w-[90%] ">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl w-full  md:text-3xl lg:text-[40px] xl:leading-[44px] py-2 md:py-4 text-center md:text-left leading-[25px] md:leading-[21px]  ">
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
                                AI & ML Projects
                            </span>
                        </h3>

                        <h2 className="text-[#7F7F7F] text-xs md:text-xl md:leading-[30px] text-center md:text-left">
                            Explore some of our groundbreaking projects where advanced AI
                            meets real-world challenges.
                        </h2>
                    </div>
                </div>
                <ProjectSection
                    title="Program analysis and ML/AI"
                    projects={programAnalysisProjects}
                />
                <ProjectSection
                    title="Interpretability of AI models"
                    projects={interpretabilityOfAIModelsProjects}
                />
                <ProjectSection
                    title="Automated reasoning of documents"
                    projects={automatedReasoningOfDocumentProjects}
                />
            </div>
        </div>
    );
};

function ProjectSection({ title, projects }) {
    return (
        <section
            className="mt-10 px-4 md:px-8 py-10 rounded-[42px]"
            style={{
                background:
                    "linear-gradient(99.81deg, rgba(38, 113, 255, 0.1) 0%, rgba(247,  76, 40, 0.1) 107.71%)",
            }}
        >
            <h2 className="text-xl md:text-3xl font-bold mb-6 text-center md:text-left">
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-8">
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
        </section>
    );
}

function ProjectCard({ icon, tags, title, description }) {
    return (
        <div className="flex flex-col gap-4 bg-white rounded-3xl p-6">
            <div className="flex justify-between items-center">
                <Image src={icon} alt={title} className="mt-2 h-12 w-12" />
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

export default AdvancedProjects;
