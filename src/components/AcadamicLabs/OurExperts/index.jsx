import React from "react";
import CustomExpert from "./Card";
import Rajesh from "../../../Images/Landing/assets/rajesh.webp";
import Shashank from "../../../Images/Landing/assets/shashank.webp";
import Aruna from "../../../Images/Landing/assets/Aruna.webp";
import Yougash from "../../../Images/Landing/assets/Yougash.webp";
import sachin from "../../../Images/Landing/assets/sachin.webp";
import pratik from "../../../Images/Landing/assets/pratik.webp";
import anup from "../../../Images/Landing/assets/anup.webp";
import Ramailo from "../../../Images/Landing/assets/Ramailo.webp";
import MLAI from "../../../Images/MLAI.webp";
import SHL from "../../../Images/SHL.webp";
import MIT from "../../../Images/MIT.webp";
import MITLab from "../../../Images/Landing/assets/MIT-Lab.webp";
import Hot from "../../../Images/Hot.webp";
import mapbox from "../../../Images/mapbox.webp";
import mitmed from "../../../Images/mitmed.webp";
import Symbiont from "../../../Images/Symbiont.webp";
import Genpact from "../../../Images/Genpact.webp";
import Scopic from "../../../Images/Scopic.webp";
import Software from "../../../Images/Software.webp";
import Lenden from "../../../Images/Landing/assets/Lenden.webp";

// Expert data
const experts = [
  {
    profile: Shashank,
    name: "Shashank Srikant",
    sub: "Ph.D. in ML from MIT (USA)",
    post: "Chiel AI officer / Co-founder",
    description:
      "Over a decade of experience in integrating AI/ML in enterprise-grade software products. Founding research engineer at a then-start up: Aspiring Minds (now SHL India). Led a team of ML research engineers to integrate research-driven AI tech in Global 500 firms like Amazon, Microsoft, JD, and Tencent.",
    logos: [
      <img src={SHL} alt="SHL" className="w-[13%] object-fill" />,
      <img src={MIT} alt="MIT" className="w-[25%] object-fill" />,
      <img src={MITLab} alt="MITLab" className="w-[25%] object-fill" />,
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
      <img src={Ramailo} alt="Ramailo" className="w-[30%] object-fill" />,

      <img src={MLAI} alt="MLAI" className="w-[35%] object-fill" />,
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
      <img src={Ramailo} alt="Ramailo" className="w-[30%] object-fill" />,
      <img src={Software} alt="Software" className="w-[30%] object-fill" />,
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
      <img src={Ramailo} alt="Ramailo" className="w-[28%] object-fill" />,

      <img src={MLAI} alt="MLAI" className="w-[32%] object-fill" />,
      <img src={Lenden} alt="Lenden" className="w-[20%]  object-fill" />,
    ],
    url: "https://www.linkedin.com/in/pratik-kharel-80767a48/",
  },
  {
    profile: Yougash,
    name: "Yogesh Adhikari",
    sub: "NIT Kurukshetra",
    post: "Consultant: Product architecture",
    description:
      "Yogesh is an exceptional full stack developer with over a decade of experience in python, java script, and AWS. He has worked at scopic software, verisk nepal, and genpact headstrong capital markets.",
    logos: [
      <img src={Genpact} alt="Genpact" className="min-w-[15%] object-fill" />,
      <img src={Scopic} alt="Scopic" className="min-w-[15%] object-fill" />,
      <img src={Symbiont} alt="Symbiont" className="min-w-[20%] object-fill" />,
    ],
    url: "https://www.linkedin.com/in/yogesh-adhikari-996a512b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    profile: Aruna,
    name: "Aruna S",
    sub: "PhD candidate in AI/ML at MIT",
    post: "Consultant: GenAI",
    description:
      "Aruna specializes in GenAI model explainability and interpreting model outputs. Also an expert in political and climate disinformation conveyed through deepfake images and videos. Previously, she managed large-scale geospatial data and infrastructure at Mapbox and HotOSM.",
    logos: [
      <img src={MIT} alt="MIT" className="w-[25%] object-fill" />,

      <img src={Hot} alt="Hot" className="w-[13%] object-fill" />,

      <img src={mapbox} alt="mapbox" className="w-[15%] object-fill" />,
      <img src={mitmed} alt="mitmed" className="w-[15%] object-fill" />,
    ],
    url: "https://www.linkedin.com/in/arunasank/",
  },
];

const OurExperts = () => {
  return (
    <div
      className="flex flex-col justify-center bg-[#ffffff] pb-8 pt-8"
      id="team"
    >
      <div className="flex flex-col justify-center items-center gap-6 py-8 ">
        <h2 className="text-3xl font-bold">Our experts</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto md:w-[85%] gap-y-[4rem]">
        {experts.map((expert, index) => (
          <CustomExpert
            key={index}
            name={expert.name}
            sub={expert.sub}
            post={expert.post}
            profile={expert.profile}
            title={expert.title}
            description={expert.description}
            logos={expert.logos}
            url={expert.url}
          />
        ))}
      </div>
    </div>
  );
};

export default OurExperts;
