import LinkedIn from "../../../../Images/LinkedIn2.svg";
function Card({
  url,
  logos,
  profile,
  sub,
  name,
  post,
  description,
  className,
}) {
  return (
    <div
      className={`shadow-custom pb-[4rem] h-[25rem] md:h-[25rem] lg:h-[26rem] mt-20 md:mt-20 lg:mt-28 xl:mt-20 xl:h-[29rem]   w-full  pt-4 relative rounded-[30px] ${className} relative transition-transform transform hover:scale-110 hover:shadow-lg`}
    >
      <div className="flex justify-center items-center absolute md:top-[-15%] top-[-15%] lg:top-[-22%] xl:top-[-15%] 2xl:top-[-25%] left-0">
        <img
          className="w-[40%] "
          src={profile}
          alt="machine learning experts"
          title="profile"
        />
      </div>
      <div className="flex items-baseline absolute top-4 right-4">
        <a
          href={`${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className=""
          title="LinkedIn - Url"
        >
          <img src={LinkedIn} alt="LinkedIn" title="LinkedIn" />
        </a>
      </div>
      <div className="flex flex-col justify-between mt-20">
        <div className="pt-2 xl:pt-4 w-full px-4 text-center ">
          <p className="font-medium text-base xl:text-[18.57px] ">{name}</p>
          <p className="text-[#A3A3A3] font-normal text-xs lg:text-sm mt-1  ">
            {sub}
          </p>
        </div>

        <div className="mt-2 lg:mt-3 px-0 xl:px-4">
          <p className="text-[#574EFF] text-sm lg:text-sm xl:text-base  text-center  ">
            {post}
          </p>
        </div>

        <div className="py-2 flex items-center px-0 xl:px-4">
          <p className=" text-center text-xs xl:text-sm  leading-[18px] lg:leading[20px] xl:leading-[22px] tracking-wider px-2 lg:px-3">
            {description}
          </p>
        </div>
        <div className="flex absolute bottom-5 w-full gap-2  px-2  mt-5 justify-center min-h-[3rem] items-center">
          {logos}
        </div>
      </div>
    </div>
  );
}

export default Card;
