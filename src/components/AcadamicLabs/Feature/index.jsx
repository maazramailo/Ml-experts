"use client";
import React, { useState } from "react";
import one from "@/image/AcadamicPage/Feature/1.webp";
import two from "@/image/AcadamicPage/Feature/2.webp";
import three from "@/image/AcadamicPage/Feature/3.webp";
import four from "@/image/AcadamicPage/Feature/4.webp";
import five from "@/image/AcadamicPage/Feature/5.webp";
import six from "@/image/AcadamicPage/Feature/6.webp";
import seven from "@/image/AcadamicPage/Feature/7.webp";
import eight from "@/image/AcadamicPage/Feature/8.webp";
import ten from "@/image/AcadamicPage/Feature/10.webp";
import eleven from "@/image/AcadamicPage/Feature/11.webp";
import Productionisation from "@/image/AcadamicPage/Feature/Productionisation.webp";
import BackEnd from "@/image/AcadamicPage/Feature/BackEnd.webp";
import Devops from "@/image/AcadamicPage/Feature/Devops.webp";
import Faster from "@/image/AcadamicPage/Feature/Faster.webp";
import App from "@/image/AcadamicPage/Feature/App.webp";
import ML from "@/image/AcadamicPage/Feature/ML.webp";
import Mlmodel from "@/image/AcadamicPage/Feature/Mlmodel.webp";
import Scarp from "@/image/AcadamicPage/Feature/Scarp.webp";
import Visualizatios from "@/image/AcadamicPage/Feature/Visualizatios.webp";
import Other from "@/image/AcadamicPage/Feature/Other.webp";
import Mlops from "@/image/AcadamicPage/Feature/Mlops.webp";

function Feature() {
  const sideMenu = [
    {
      img: four,
      title: "Data ingestion pipelines",
      description: "Terrabyte scale data cleaning, transforming, processing.",
      image: Productionisation,
    },
    {
      img: two,
      title: "MLOps",
      description: (
        <ul className="list-disc mx-4">
          <li>End-to-end model management and deployment*</li>
          <li>Fine-tuning models</li>
          <li>Weight analysis and optimization</li>
          <li>Speeding up inference</li>
          <li>Model compression</li>
          <li>
            Hosting models across different cloud and compute infrastructures
          </li>
          <li>Deployment management (Docker, CI/CD)</li>{" "}
          <li>Parallelizing training across multiple GPUs</li>{" "}
        </ul>
      ),
      image: Mlops,
    },
    {
      img: eight,
      title: "Backend development",
      description: (
        <ul className="list-disc mx-4">
          <li>
            Robust system-level and API development for high-performance
            environments
          </li>
          <li>Writing APIs for third-party integration</li>
          <li>System-level code optimization</li>
          <li>Interfacing with C/C++ low-latency code</li>
          <li>
            Network protocol integration: gRPC for real-time data transfer
          </li>
        </ul>
      ),
      image: BackEnd,
    },
    {
      img: one,
      title: "DevOps",
      description: (
        <ul className="list-disc mx-4">
          <li>Linux-based cloud platforms like AWS, Azure, GCP</li>
          <li>Scaling servers to handle internet- scale traffic</li>
          <li>Setting up content delivery networks</li>

          <li>
            Automating workflows: receive inputs, spawn servers, perform
            computations, orchestrate multiple services, log and store results
            in databases, raise alerts, shut down unused servers, etc.
          </li>
        </ul>
      ),

      image: Devops,
    },

    {
      img: three,
      title: "Interactive webpage design",
      description:
        "Create dynamic and engaging webpages with interactive elements that enhance user experience. Utilize responsive design, animations, and user-friendly interfaces to boost engagement.",
      image: Faster,
    },
    {
      img: ten,
      title: "App development",
      description:
        "Develop dynamic, interactive apps with responsive design and engaging features to enhance user experience and drive user engagement.",
      image: App,
    },
    {
      img: seven,
      title: "Machine learning & modeling",
      description: (
        <div>
          <p>ML specializations:</p>
          <ul className="list-disc mx-4">
            <li>
              Supervised & Unsupervised learning: Regressions, Transformers,
              Graph neural networks
            </li>
            <li>Domain: Text and Vision</li>
            <li>Reinforcement learning</li>
            <li>Time-Series forecasting: ARIMA, LSTMs, Prophet</li>
          </ul>
        </div>
      ),
      image: ML,
    },

    {
      img: five,
      title: "Database management",
      description: "Database management and query optimization",
      image: Mlmodel,
    },
    {
      img: six,
      title: "Web & document scraping",
      description:
        "Advanced skills in web scraping and document extraction using various tools.",
      image: Scarp,
    },

    {
      img: seven,
      title: "Visualizations",
      description: (
        <ul className="list-disc mx-4">
          <li>Creating insightful visual representations of data*</li>
          <li> Libraries: Matplotlib, Seaborn, GGPlot</li>
        </ul>
      ),
      image: Visualizatios,
    },
    {
      img: eleven,
      title: "Other backend services",
      description: (
        <ul className="list-disc mx-4">
          <li>Writing APIs to interface with a third party software stack, </li>
          <li>System-level optimization of code, </li>
          <li>Interfacing with C/C++ low-latency code, </li>
          <li>
            Interfacing with various network protocols like gRPC to receive
            real-time data.
          </li>
        </ul>
      ),
      image: Other,
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState(sideMenu[0]);

  const handleMenuClick = (index) => {
    // Set a timeout to delay the selection update
    setTimeout(() => {
      setSelectedMenu(sideMenu[index]);

      // Scroll only for desktop view
      if (window.innerWidth > 768) {
        const blackBox = document.getElementById("services");
        if (blackBox) {
          blackBox.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 400); // 5000 milliseconds = 5 seconds
  };

  return (
    <section className="justify-center items-center w-full flex flex-col gap-6 md:gap-12  mt-40">
      <div className="justify-center items-center  flex flex-col w-[90%] gap-3">
        <h2 className="text-[#000000] lg:text-[40px] xl:leading-[55px] text-2xl font-semibold  leading-normal">
          Services{""}
        </h2>
      </div>
      <div className="custom-shadow bg-[#111] w-[90%] xl:p-8 p-4 md:p-4 md:pt-2 lg:py-6 rounded-2xl ">
        <div className="flex flex-col md:flex-row w-full justify-evenly gap-5 md:gap-4 ">
          <div className="md:min-w-[30%] min-w-[70%] text-white">
            {sideMenu.map((item, index) => (
              <div key={index}>
                <div
                  className={`flex flex-col justify-start p-4 gap-4 hover:bg-[#585DCC80] rounded-lg md:mt-3 mt-5 cursor-pointer ${selectedMenu.title === item.title && "bg-[#585DCC80]"
                    }`}
                  onClick={() => handleMenuClick(index)}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img.src}
                      alt={item.title}
                      title={item.title}
                      className="w-[10%] md:w-[12%]"
                    />
                    <p className="text-base leading-normal">{item.title}</p>
                  </div>
                </div>

                {/* Accordion: Only show content in mobile if selected */}
                <div
                  className={`transition-all duration-300 ease-in-out ${selectedMenu?.title === item.title
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                    } md:max-h-none md:opacity-100`}
                >
                  <div className="text-white mt-4 md:hidden">
                    <h2 className="text-2xl leading-normal md:block hidden">
                      {item.title}
                    </h2>
                    <div className="text-xs font-normal leading-[26px] text-[#C5C5C5]">
                      {item.description}
                    </div>
                    <img
                      className="mt-5 min-w-[200px] min-h-[150px]"
                      src={item.image.src}
                      alt={item.title}
                      title={item.title}
                    />
                  </div>
                </div>

                {index < sideMenu.length - 1 && (
                  <hr className="border-[#4B4B4B] mt-2" />
                )}
              </div>
            ))}
          </div>

          {/* Content for desktop view */}
          <div className="md:min-w-[70%] min-w-[100%] text-white hidden md:block">
            <div className="xl:px-10 px-1 flex flex-col gap-3 md:mt-2">
              <h2 className="xl:text-4xl text-2xl leading-normal">
                {selectedMenu.title}
              </h2>
              <div className="text-xs xl:text-base font-normal md:w-[93%] w-full md:pr-6 leading-[26px] md:leading-[30px] xl:leading-9 text-[#C5C5C5]">
                {selectedMenu.description}
              </div>
              <img
                className="mt-9 md:pr-4"
                src={selectedMenu.image.src}
                alt={selectedMenu.title}
                title={selectedMenu.title}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
