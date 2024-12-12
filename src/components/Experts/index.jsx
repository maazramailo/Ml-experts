import CustomExpert from "@/components/ExpertsCard";
import Rajesh from "@/image/Experts/Rajesh.webp";
import Shashank from "@/image/Experts/Shashank.webp";
import Aruna from "@/image/Experts/Aruna.webp";
import Yougash from "@/image/Experts/Yougash.webp";
import sachin from "@/image/Experts/Sachin.webp";
import pratik from "@/image/Experts/Prateek.webp";
import Ramailo from "@/image/CompaniesLogo/Ramailo.webp";
import MLAI from "@/image/CompaniesLogo/MLAI.webp";
import SHL from "@/image/CompaniesLogo/SHL.webp";
import MIT from "@/image/CompaniesLogo/MIT.webp";
import MITLab from "@/image/CompaniesLogo/MITLab.webp";
import Hot from "@/image/CompaniesLogo/Hot.webp";
import mapbox from "@/image/CompaniesLogo/mapbox.webp";
import mitmed from "@/image/CompaniesLogo/mitmed.webp";
import Symbiont from "@/image/CompaniesLogo/Symbiont.webp";
import Genpact from "@/image/CompaniesLogo/Genpact.webp";
import Scopic from "@/image/CompaniesLogo/Scopic.webp";
import Software from "@/image/CompaniesLogo/Software.webp";
import Lenden from "@/image/CompaniesLogo/Lenden.webp";
import Image from "next/image";

export default function Experts() {
    const experts = [
        {
            profile: Shashank,
            name: "Shashank Srikant",
            sub: "PhD in AI/ML from MIT (USA)",
            post: "Chiel AI officer / Co-founder",
            description:
                "Over a decade of experience in integrating AI/ML in enterprise-grade software products. Founding research engineer at a then-start up: Aspiring Minds (now SHL India). Led a team of ML research engineers to integrate research-driven AI tech in Global 500 firms like Amazon, Microsoft, JD, and Tencent.",
            logos: [
                <Image src={SHL} alt="SHL" title="SHL" className="w-[13%] object-fill" />,
                <Image src={MIT} alt="MIT" title="MIT" className="w-[25%] object-fill" />,
                <Image
                    src={MITLab}
                    alt="MITLab"
                    title="MITLab"
                    className="w-[25%] object-fill"
                />,
            ],
            url: "https://www.linkedin.com/in/shashank-srikant-965aa125/",
        },
        {
            profile: Rajesh,
            name: "Rajesh Sah",
            sub: "NIT Kurukshetra",
            post: "CEO / Co-founder",
            description:
                "With over a decade of experience in software development, team building and project management within the IT and services industry, has empowered growth-stage startups to build, optimize and rewrite their software solutions.",
            logos: [
                <Image
                    src={Ramailo}
                    alt="Ramailo"
                    title="Ramailo"
                    className="w-[30%] object-fill"
                />,

                <Image
                    src={MLAI}
                    alt="MLAI"
                    title="MLAI"
                    className="w-[35%] object-fill"
                />,
            ],
            url: "https://www.linkedin.com/in/rajesh-sah-807b4326/",
        },
        {
            profile: sachin,
            name: "Sachin Sabbarwal",
            sub: "NIT Kurukshetra",
            post: "Head of Engineering",
            description:
                "Experienced head of engineering at Ramailo Tech, leading a talented team. Founder of UPSC wars. Previously, a senior software engineer at Sprinklr and software engineer at Terracotta. Passionate about innovative projects.",
            logos: [
                <Image
                    src={Ramailo}
                    alt="Ramailo"
                    title="Ramailo"
                    className="w-[30%] object-fill"
                />,
                <Image
                    src={Software}
                    alt="Software"
                    title="Software"
                    className="w-[30%] object-fill"
                />,
            ],
            url: "https://www.linkedin.com/in/sachin-sabbarwal-7a90aa28/",
        },
        {
            profile: pratik,
            name: "Pratik Kharel",
            sub: "NIT Kurukshetra",
            post: "Chief Operating Officer",
            description:
                "With a decade of experience in multinationals and startups, is a founding member of fintech startup LenDenClub. He has led teams in operations, finance, legal, compliance, and regulatory affairs, driving growth and ensuring seamless business operations.",
            logos: [
                <Image
                    src={Ramailo}
                    alt="Ramailo"
                    title="Ramailo"
                    className="w-[28%] object-fill"
                />,

                <Image
                    src={MLAI}
                    alt="MLAI"
                    title="MLAI"
                    className="w-[32%] object-fill"
                />,
                <Image
                    src={Lenden}
                    alt="Lenden"
                    title="Lenden"
                    className="w-[20%]  object-fill"
                />,
            ],
            url: "https://www.linkedin.com/in/pratik-kharel-80767a48/",
        },

        {
            profile: Aruna,
            name: "Aruna S",
            sub: "PhD candidate in AI/ML at MIT",
            post: "Consultant: GenAI",
            description:
                "Aruna specializes in GenAI model explainability and interpreting model outputs. Also an expert in political and climate disinformation conveyed through deepfake images and videos. Previously, she managed large-scale geospatial data and infrastructure at Mapbox and HotOSM.",
            logos: [
                <Image src={MIT} alt="MIT" title="MIT" className="w-[25%] object-fill" />,

                <Image src={Hot} alt="Hot" title="Hot" className="w-[13%] object-fill" />,

                <Image
                    src={mapbox}
                    alt="mapbox"
                    title="mapbox"
                    className="w-[15%] object-fill"
                />,
                <Image
                    src={mitmed}
                    alt="mitmed"
                    title="mitmed"
                    className="w-[15%] object-fill"
                />,
            ],
            url: "https://www.linkedin.com/in/arunasank/",
        },
        {
            profile: Yougash,
            name: "Yogesh Adhikari",
            sub: "NIT Kurukshetra",
            post: "Consultant: Product architecture",
            description:
                "Yogesh is an exceptional full stack developer with over a decade of experience in python, java script, and AWS. He has worked at scopic software, verisk nepal, and genpact headstrong capital markets.",
            logos: [
                <Image
                    src={Genpact}
                    alt="Genpact"
                    title="Genpact"
                    className="min-w-[15%] object-fill"
                />,
                <Image
                    src={Scopic}
                    alt="Scopic"
                    title="Scopic"
                    className="min-w-[15%] object-fill"
                />,
                <Image
                    src={Symbiont}
                    alt="Symbiont"
                    title="Symbiont"
                    className="min-w-[20%] object-fill"
                />,
            ],
            url: "https://www.linkedin.com/in/yogesh-adhikari-996a512b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
    ];

    return (
        <div className="pb-16" id="experts">
            <div
                className="w-full   flex flex-col gap-5 rounded-xl py-2 pb-16 md:py-16 justify-center items-center"
                style={{
                    background:
                        "linear-gradient(100deg, rgba(38, 113, 255, 0.05) 0%, rgba(247, 76, 40, 0.05) 107.71%)",
                }}
            >
                <h2 className="text-[#000000] text-center text-2xl md:text-4xl lg:text-[40px] xl:leading-[55px] font-normal ">
                    Meet our{" "}
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
                        machine learning experts
                    </span>
                </h2>
                <p className="text-center text-[#676767] font-normal text-sm xl:text-lg w-[95%] md:w-[75%] xl:leading-[32px]  md:pb-5">
                    Our strength lies in our diverse team of experts who are pioneers in
                    the fields of AI and ML. Each member brings deep industry experience
                    and a unique perspective that drives innovation and results.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 2xl:gap-y-[5rem] 2xl:mt-[1rem] w-[90%] mx-auto md:w-[85%] gap-y-[4rem]">
                    {experts.map((expert, index) => (
                        <CustomExpert
                            key={index}
                            name={expert.name}
                            sub={expert.sub}
                            post={expert.post}
                            className="bg-white"
                            profile={expert.profile}
                            title={expert.title}
                            description={expert.description}
                            logos={expert.logos}
                            url={expert.url}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
