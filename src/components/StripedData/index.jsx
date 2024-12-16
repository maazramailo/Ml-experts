import { Divider, Tooltip } from "antd";
import React from "react";

const StripedData = ({ data }) => {
  // const generateRandomColor = () => {
  //     const letters = "0123456789ABCDEF";
  //     let color = "#";
  //     for (let i = 0; i < 6; i++) {
  //         color += letters[Math.floor(Math.random() * 16)];
  //     }
  //     return color;
  // };

  const totalValue = data?.reduce((acc, item) => acc + item?.percentage, 0);

  const color = {
    AAP: "#FFD700", // Gold
    SP: "#87CEEB", // Sky Blue
    AITC: "#98FB98", // Pale Green
    BRS: "#FFB6C1", // Light Pink
    BJP: "orange", // Light Salmon
    "JD(U)": "#FAFAD2", // Light Goldenrod Yellow
    BJD: "#FF69B4", // Hot Pink
    DMK: "#ADD8E6", // Light Blue
    GFP: "#FFDAB9", // Peachpuff
    YCP: "#FFDAB9", // Peachpuff
    JKNC: "#FFE4E1", // Misty Rose
    JSP: "#F0E68C", // Khaki
    "JD(S)": "#90EE90", // Light Green
    JMM: "#FFA500", // Orange
    MGP: "#DDA0DD", // Plum
    AICC: "#DDA0DD", // Plum
    NCP: "aqua", // Lavender
    INC: "#FFC0CB", // Pink
    RJD: "#87CEFA", // Light Sky Blue
    SAD: "#F08080", // Light Coral
    SHS: "#D3D3D3", // Light Grey
    SDF: "#FFEBCD", // Blanched Almond
    SKM: "#98FB98", // Pale Green
    TDP: "#FF6347", // Tomato
    YSRCP: "#FF4500", // Orange Red
    "N/A": "#DCDCDC", // Gainsboro
  };

  return (
    <div className="flex justify-center flex-wrap mb-5">
      {data.map((party, index) => {
        const maxWidth = 220;
        const calculatedWidth = (party?.percentage / totalValue) * 100;
        const width = Math.min(calculatedWidth, maxWidth / 2.2);
        return (
          <div
            className="flex flex-col  text-center"
            key={index}
            style={{ flex: `0 0 ${width}%`, maxWidth: `${maxWidth}px` }}
          >
            <Tooltip title={party?.party_name}>
              <div
                className="mb-1 p-2 text-black min-w-[64px]"
                style={{ background: color[party?.party_code] }}
              >
                <p>{party?.party_code}</p>
              </div>
            </Tooltip>
            <p>{party?.amount / 10000000} Cr</p>
            <p>{party?.percentage?.toFixed(1)} %</p>
            <Divider
              className="md:hidden"
              style={{ backgroundColor: "#ccc" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StripedData;
