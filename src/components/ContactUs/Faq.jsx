"use client"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Faq = () => {
  const faqData = [
    {
      question: "1. Inputs and outputs",
      answer:
        "Clearly outline the inputs and expected outputs for the AI system. Providing a detailed list will help us understand your requirements effectively.",
    },
    {
      question: "2. Metrics to measure the quality of output",
      answer:
        "Define how you intend to gauge the quality of the AI system's output. Having concrete metrics in mind enables us to align our efforts with your expectations.",
    },

    {
      question: "3. Specifying the data you possess",
      answer:
        "Specify the amount and nature of your available data. For instance, if your task involves translation, mention the number of sentence pairs you possess. Similarly, for tasks like medical information retrieval, include details such as the quantity of medical facts and their average sentence length. Broadly stating the number of documents you possess, or the quantity of data (e.g. 30 GB worth of files) is usually not informative. If you lack specific data, let us know, and consider investing effort into preparing a small dataset for evaluating the AI solution we develop.",
    },
    {
      question: "4. Have a KISS solution in mind",
      answer:
        "Consider the effectiveness of a Keep-it-simple-stupid (KISS) solution for your problem. Evaluating simpler, non-AI approaches helps establish baselines and assess the necessity of more complex solutions. For example, in specialized domains, it is common for off-the-shelf models to perform comparably to finely-tuned ones. This evaluation can save your time and resources.",
    },
    {
      question: "5. Fine-tuning vs. RAG",
      answer:
        "Understand the implications of fine-tuning versus employing Retrieval-Augmented Generation (RAG) systems. While RAG systems offer advanced capabilities, they often require significant engineering effort for effective deployment. Fine-tuning demands substantial data and computational resources. We will work with you to determine which is the best solution for you. ",
    },
    {
      question: "6. Expertise required for your project",
      answer:
        "Consider the expertise required for your project. It is infeasible to expect one of our engineers to implement an AI solution you are looking for. Our specialized team comprises scientists dedicated to AI development, and product specialists focused on prototyping and integration. Leveraging diverse skill sets ensures comprehensive project execution. A technically proficient project manager will serve as the primary point of contact to ensure project alignment and progress tracking.",
    },
    {
      question: "7. Fixed-price projects vs hourly rate",
      answer:
        "The clarity of your requirements significantly influences our engagement approach. Clear, well-defined requirements facilitate accurate estimation and planning, leading us to recommend a fixed-price project. In this scenario, we'll provide a detailed breakdown of costs associated with employing each engineer required for your task. Conversely, if you need consultations and iterative clarifications with our team, we will advocate for an hourly rate model.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleAnswer = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 md:px-0">
      <div className="text-xl md:text-4xl font-medium mb-6 flex justify-center">
        Frequently asked questions
      </div>

      {faqData.map((faq, index) => (
        <div key={index} className="faq-item p-1 mb-1 rounded-xl">
          <div
            className={`relative p-[1px] rounded-xl text-black ${expandedIndex === index
              ? "bg-gradient-to-b from-[#2671FF] to-[#F74C28]"
              : ""
              }`}
          >
            <div
              className={`absolute inset-0 rounded-xl border-1 border-transparent ${expandedIndex === index
                ? "bg-gradient-to-b from-[#2671FF] to-[#F74C28]"
                : "bg-transparent"
                }`}
            ></div>
            <div className="relative z-10 question-container border items-center bg-white rounded-xl p-4">
              <div className="question">
                <button
                  className="w-full text-xl font-semibold mb-2 focus:outline-none flex justify-between items-center"
                  onClick={() => toggleAnswer(index)}
                >
                  <div className="text-sm md:text-[18px] text-left">
                    {expandedIndex === index ? (
                      <span
                        className="font-semibold text-left"
                        style={{
                          background:
                            "linear-gradient(100deg, #2671FF 0%, #F74C28 107.71%)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {faq.question}
                      </span>
                    ) : (
                      faq.question
                    )}
                  </div>
                  <FontAwesomeIcon
                    icon={expandedIndex === index ? faChevronUp : faChevronDown}
                  />
                </button>
              </div>
            </div>
          </div>
          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${expandedIndex === index
              ? "max-h-[200px] md:max-h-[500px]"
              : "max-h-0"
              }`}
          >
            <div className="answer-box bg-gray-100 font-normal text-black p-6 text-xs md:text-[16px] rounded-xl leading-[24px]">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq
