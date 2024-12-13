"use client"
import React, { useEffect, useRef } from "react";
import BlogTile from "@/components/BlogTile";
import NoDataFound from "@/components/NoDataFound/index";
import { Each } from "@/util/renderList";
import useBlogs from "@/hooks/useBlogs";
import { CircularProgress } from "@mui/material";
import Hero2 from "@/image/Blogs/BlogBgMb.png";
import Hero1 from "@/image/Blogs/BlogBackgroudImage.webp";
import { usePathname } from "next/navigation";

const AllBlogs = () => {
    const location = usePathname();
    const currentPath = location.hash;

    const BlogsRef = useRef(null);
    const { blogs, loading } = useBlogs();
    const bgImageStyle = {
        backgroundImage: `url(${window.innerWidth < 768 ? Hero2 : Hero1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
    };

    useEffect(() => {
        if (currentPath === "") {
            window.scrollTo(0, 0);
        } else {
            const offset = BlogsRef.current.offsetTop - 0;
            window.scrollTo({
                top: offset,
                behavior: location.state?.scroll || "auto",
            });
        }
    }, [currentPath, location.state]);

    return (
        <>

            <div
                ref={BlogsRef}
                className=" flex flex-col gap-6 md:p-0 min-h-[90vh]"
                id="Blogs"
            >
                {loading ? (
                    <div className="z-50 flex justify-center items-center absolute top-0 left-0 w-[100%] h-[100%] bg-[#dfdfdf] opacity-80">
                        <CircularProgress />
                    </div>
                ) : !Boolean(blogs.length) ? (
                    <NoDataFound />
                ) : (
                    <>
                        <div
                            className="flex justify-center items-center mt-[2rem] md:h-[55vh] h-[45vh]"
                            style={bgImageStyle}
                        >
                            <h1 className="text-white md:text-[48px] text-[36px] font-semibold ">
                                Our <span className="text-[#FF8F24]">blogs</span>
                            </h1>
                        </div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-5 md:w-[90%] w-full mx-auto justify-items-center">
                            <Each
                                of={blogs}
                                render={(item) => (
                                    <BlogTile
                                        heading={item.title}
                                        paragraph1={item.summary}
                                        image={item.cover_image}
                                        url={item.slug}
                                        bgColorClass="bg-[#EDE7FF]"
                                        id={item.slug}
                                        time={item.published_at}
                                        alt_image={item.image_alt_text}
                                        author_name={item.Author}
                                    />
                                )}
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default AllBlogs;
