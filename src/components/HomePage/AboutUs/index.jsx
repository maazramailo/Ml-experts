
import ReactPlayer from "react-player";

export default function AboutUs() {

    const videoUrl = "./AboutUs.mp4";
    return (
        <div
            className="w-full  flex flex-col gap-5 rounded-xl py-16 justify-center items-center"
            id="about-us"
        >
            <div className="w-full  flex flex-col gap-5 rounded-xl py-2   justify-center items-center">
                <h2 className="text-[#000000] text-2xl md:text-4xl lg:text-[40px] xl:leading-[55px] font-normal ">
                    <span
                        className="font-semibold"
                        style={{
                            background:
                                "linear-gradient(105deg, #2671FF 37.77%, #F74C28 69.22%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        About
                    </span>{" "}
                    us
                </h2>
                <p className="text-center text-[#676767] font-normal tracking-wide   text-sm xl:text-lg w-[95%] md:w-[80%] xl:w-[60%] md:pb-14">
                    As a premier <h1 className=" inline">AI ML consulting company </h1>,
                    we specialize in deploying deep tech solutions such as neural
                    networks, advanced algorithms, and high-performance computing. Our
                    team of <h1 className=" inline">machine learning experts </h1> and ML
                    consultants is dedicated to integrating sophisticated AI technologies
                    that drive innovation and discovery.
                </p>
            </div>
            <div className="w-full flex justify-center items-center">
                <ReactPlayer
                    url={videoUrl}
                    loop={true}
                    muted={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    className="!w-[345px] !h-[200px] md:!w-[600px] md:!h-[338px] lg:!w-[800px] lg:!h-[450px] xl:!w-[1000px] xl:!h-[560px]"
                />
            </div>
        </div>
    );
}
