import Trust1 from "@/image/AcadamicPage/Trusted/Rutgers.webp";
import Trust2 from "@/image/AcadamicPage/Trusted/MiTechnology.webp";
import Trust3 from "@/image/AcadamicPage/Trusted/MitMediaLab.webp";
import Trust4 from "@/image/AcadamicPage/Trusted/MichiganState.webp";

export default function Trusted() {
  const T1 = [Trust3, Trust4, Trust2, Trust1];
  return (
    <section className="flex flex-col items-center gap-5 justify-center  md:h-screen my-20 ">
      <div className="flex w-full mt-10 mb-10 justify-center items-center">
        <h2 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[55px] w-full text-center ">
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
            Trusted
          </span>{" "}
          by the best
        </h2>
      </div>
      <div className="flex flex-col gap-5 md:w-[95%] w-[90%] mb-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-14 lg:gap-20 gap-5 items-center justify-center">
          {T1.map((items, index) => (
            <img
              key={index}
              src={items.src}
              alt="items"
              title="Company Images"
              className="w-[100%] rounded-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
