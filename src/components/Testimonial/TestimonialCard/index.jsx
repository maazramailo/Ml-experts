import Image from "next/image";
import StarRatings from "react-star-ratings";

function TestinomialCard({ profile, sub, name, post, description, className }) {
    return (
        <div
            className={`w-[320px] md:w-[400px] lg:w-[480px] shadow-custom pb-[4rem] h-[15rem] md:h-[18rem] lg:h-[20rem] mt-10 md:mt-20 lg:my-20  xl:h-[23.5rem] mx-4 md:mx-[2rem]  py-4 relative rounded-2xl md:rounded-[24px] lg:rounded-[30px] ${className} relative hover:shadow-lg`}
        >
            <div className="flex  justify-end items-center absolute  top-[-10%] right-[6%]">
                <Image
                    className="w-[20%] 2xl:w-[90px] "
                    src={profile}
                    alt="machine learning experts"
                    title="profile"
                />
            </div>

            <div className="  flex flex-col justify-between h-full gap-8  px-3 xl:px-6 mt-2 md:mt-5 xl:mt-10">
                <div className="flex flex-col justify-between gap-1 md:gap-8">
                    <div>
                        <StarRatings
                            rating={5}
                            starRatedColor="gold"
                            starDimension="21px"
                            starSpacing="2px"
                            numberOfStars={5}
                            name="rating"
                        />
                    </div>

                    <div className="py-2 flex items-center ">
                        <p className=" text-start text-sm lg:text-base xl:text-xl font-normal text-[#444749] leading-[18px] md:leading-[23px] lg:leading[26px] xl:leading-[30px] tracking-wider">
                            {description}
                        </p>
                    </div>
                </div>
                <div className=" xl:pt-0 w-full  text-start absolute bottom-6">
                    <p className="font-normal text-sm lg:text-base ">{name}</p>
                    <p className="text-[#505050] font-normal text-[10px] lg:text-xs mt-1  ">
                        {sub}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TestinomialCard;
