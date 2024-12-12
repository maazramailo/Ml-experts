import { useEffect, useReducer, Suspense } from "react";
import Hero1 from "@/image/Home/NewLandingPage.webp";
import ArrowRight from "@/image/Home/guidance_up-arrow.svg";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const navigate = useRouter();
  const words = [
    "DevOps",
    "MLOps",
    "Backend integration",
    "Data ingestion pipelines",
  ];

  const initialState = {
    displayText: "",
    wordIndex: 0,
    isDeleting: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "update":
        return { ...state, displayText: action.displayText };
      case "delete":
        return { ...state, isDeleting: true };
      case "nextWord":
        return {
          ...state,
          wordIndex: (state.wordIndex + 1) % words.length,
          isDeleting: false,
          displayText: "",
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { displayText, wordIndex, isDeleting } = state;

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? 30 : 100;

    const handleTyping = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          dispatch({
            type: "update",
            displayText: currentWord.slice(0, displayText.length + 1),
          });
        } else {
          setTimeout(() => dispatch({ type: "delete" }), 500);
        }
      } else {
        if (displayText.length === 0) {
          dispatch({ type: "nextWord" });
        } else {
          dispatch({
            type: "update",
            displayText: currentWord.slice(0, displayText.length - 1),
          });
        }
      }
    }, typeSpeed);

    return () => clearTimeout(handleTyping);
  }, [displayText, isDeleting, wordIndex]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section
        id="home"
        style={{
          background: `url(${Hero1.src}) no-repeat center center / cover`,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: window.innerWidth > 768 ? "100vh" : "70vh",
        }}
        className="flex items-center md:min-h-screen h-[70vh] justify-center"
      >
        <div className="container px-4 lg:px-8 flex justify-center items-center">
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <h2 className="text-white text-lg md:text-3xl mt-[7rem] xl:text-[48px] text-center w-full md:w-[70%] md:leading-[1.3] xl:w-[55%] font-bold">
              Accelerate your <br />
              <span className="text-[#FF8F24]">lab's engineering</span> needs
              with
            </h2>
            <h2 className="text-white text-lg md:text-3xl xl:text-[48px] text-center w-[90%] md:w-[70%] md:leading-[1.3] xl:w-[55%] font-bold min-h-[30px] md:min-h-[60px]">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="pt-5   text-[#FFFFFFCC] font-normal text-[10px] leading-[16px]  md:text-base xl:text-lg tracking-wide  w-full md:w-[90%] lg:w-[80%] xl:w-[65%] text-center">
              Empowering academic labs and growth-stage startups to solve
              complex AI challenges swiftly. Our elite team—from Google, Amazon,
              and MIT PhDs—delivers rapid proofs of concept, so your core team
              can focus on driving your business forward.
            </p>
            <div className="mt-10 flex justify-end">
              <button
                className="px-4 md:px-8 py-2 flex items-center gap-2 text-white border-2 border-white rounded-3xl shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-shadow  duration-600  hover:bg-[#FF8F24] text-xs md:text-sm xl:text-base bg-black"
                onClick={() => navigate.push("/contactus")}
              >
                Contact us{" "}
                <span className="flex justify-end">
                  <img
                    src={ArrowRight.src}
                    alt="ai ml consulting company"
                    title="ArrowRight"
                    className=" w-[70%] xl:w-full"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
