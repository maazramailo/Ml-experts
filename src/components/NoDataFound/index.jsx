import React from "react";
import noDataDound from "./no_data_found.jpg";
import Image from "next/image";
const NoDataFound = () => {
    return (
        <div className="flex flex-col justify-center h-screen gap-5 items-center my-4 min-h-90">
            <Image src={noDataDound} alt="No data found" className="w-96" />
            <p className="text-black">No Data found</p>
        </div>
    );
};

export default NoDataFound;