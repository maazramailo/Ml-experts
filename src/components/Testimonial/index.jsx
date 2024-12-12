import React, { Suspense, useState, useEffect } from "react";
import TestinomialCard from "@/components/Testimonial/TestimonialCard";
import Pramod from "@/image/WhyChooseUs/pramod.webp";
import Hamid from "@/image/WhyChooseUs/Hamid.webp";
import Nikhil from "@/image/WhyChooseUs/Nikhil.webp";
import PageVisibility from "react-page-visibility";
import { VerticalTicker, HorizontalTicker } from "react-infinite-ticker";

export default function Testamonial() {
    const [pageIsVisible, setPageIsVisible] = useState(true);

    const handleVisibilityChange = (isVisible) => {
        setPageIsVisible(isVisible);
    };

    const experts = [
        {
            profile: Pramod,
            name: "Pramod Verma",
            sub: "Javascript frontend developer",
            description:
                "I had the pleasure of working with a dedicated team of passionate engineers who are exceptional problem-solvers.",
        },
        {
            profile: Hamid,
            name: "Hamid Mirghafoori",
            sub: "Frontend Developer at Ryanair",
            description:
                "Excellent experience. ML experts are doing their best to deliver gigh end product",
        },
        {
            profile: Nikhil,
            name: "Nikhil Mantha",
            sub: "Co Founder at Piggy",
            description:
                "They were the perfect partners to do experiments at reasonable cost before we could double down on one experiment. Best team to work with in the early stages of AI exploration!",
        },
        {
            profile: Hamid,
            name: "Deep Sherchan",
            sub: "DBS Design Studio",
            description:
                "ML Experts have a very dedicated team that has gone above and beyond to deliver the project and provided continuous support after the project was delivered.",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full  pb-16 md:pb-[14rem] lg:pb-[18rem]">
            <h2 className="text-[#000000] text-center text-2xl md:text-4xl lg:text-[40px] xl:leading-[55px] font-normal">
                Hear from{" "}
                <span
                    className="font-semibold"
                    style={{
                        background: "linear-gradient(97deg, #2671FF 0.63%, #F74C28 49.93%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    our partners
                </span>
            </h2>
            <p className="mt-4 text-center text-[#676767] font-normal text-sm xl:text-lg w-[80%] md:w-[75%] xl:leading-[32px] md:pb-5">
                Hear what our satisfied customers have to say about us.
            </p>
            <div className="w-[90%] mx-auto md:w-[85%]  h-[25vh] ">
                <Suspense fallback={<div>Loading testimonials...</div>}>
                    <PageVisibility onChange={handleVisibilityChange}>
                        {pageIsVisible && (
                            <HorizontalTicker duration={15000} easing="linear">
                                {experts.map((expert, index) => (
                                    <div className="h-[65vh]">
                                        <TestinomialCard
                                            key={index}
                                            name={expert.name}
                                            sub={expert.sub}
                                            post={expert.post}
                                            profile={expert.profile}
                                            title={expert.title}
                                            description={expert.description}
                                        />
                                    </div>
                                ))}
                            </HorizontalTicker>
                        )}
                    </PageVisibility>
                </Suspense>
            </div>
        </div>
    );
}
