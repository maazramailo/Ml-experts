import Contactbanner from "@/image/confirmation/ThankYouScreenBg.png";
import ThankyouImg from "@/image/confirmation/ThankYou.png";
import { scrollToTop as ScrollToSection } from "@/util";
export default function Thankyou() {
  const backgroundImageStyle = {
    backgroundImage: `url('${Contactbanner.src}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <ScrollToSection />
      <section className="mt-[6rem] w-[95%] mx-auto mb-0 md:mb-4">
        <div
          className="w-full rounded-xl px-[14px] relative flex flex-col gap-4 md:gap-4 items-center py-14"
          style={backgroundImageStyle}
        >
          <img
            src={ThankyouImg.src}
            alt="ThankyouImg"
            className="w-[60%] md:w-[20%] sm:w-[40%]"
          />
          <h1 className="text-white text-center text-3xl md:text-5xl md:font-extrabold font-bold lg:leading-12 mt-4 ">
            Thank you
          </h1>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-white text-xs md:text-base">
              for contacting us our team will reach you
            </p>
            <p className="text-white text-xs md:text-base">within 24 hours</p>
          </div>
        </div>
      </section>
    </>
  );
}
