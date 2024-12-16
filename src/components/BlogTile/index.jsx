import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Moment from "react-moment";

const BlogTile = ({
    image,
    heading,
    time,
    paragraph1,
    paragraph2,
    bgColorClass,
    id,
    url,
    alt_image = "alt",
    author_name = "",
}) => {
    return (
        <div id={`${id}`}>
            <div
                className={` rounded-xl mx-auto md:py-[1rem] py-[1rem] md:px-[1rem] px-6 items-center gap-3`}
            >
                <div className=" flex justify-center">
                    <Image
                        className="rounded-lg shadow-lg w-full h-[160px] md:w-full object-cover md:h-[200px] xl:h-[230px]"
                        src={image}
                        alt={alt_image}
                        title={alt_image}
                    />
                </div>
                <div className="flex flex-col gap-2 text-start mt-2">
                    <span className="mb-2 font-semibold tracking-tight w-full text-[#000] text-base md:text-xl ">
                        {heading}
                    </span>
                    <div className="flex justify-between">
                        <p className="mb-2 font-normal w-1/2 md:w-auto text-gray-700 text-xs md:text-sm leading-6 text-left ">
                            {author_name}
                        </p>
                        <p className="mb-2 font-normal text-gray-700 text-xs md:text-sm leading-6 text-right ">
                            <Moment format="DD MMM YYYY">{time}</Moment>
                        </p>
                    </div>
                    <p className="mb-3 font-normal text-[#6C757D] text-xs md:text-sm leading-6 overflow-hidden text-ellipsis line-clamp-3">
                        {paragraph1}
                    </p>
                    {paragraph2 && (
                        <p className="mb-3 font-normal text-gray-700 text-xs md:text-sm leading-6 ">
                            {paragraph2}
                        </p>
                    )}

                    {url && (
                        <Link href={url} title={url}>
                            <p className="bg-transparent text-sm md:text-base cursor-pointer hover:underline text-blue-700 font-medium max-w-xs">
                                Read more
                            </p>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogTile;
