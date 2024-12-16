"use client"
import React, { useEffect } from "react";

const ElectoralChart = ({ htmlContent, image }) => {
    useEffect(() => {
        const scripts = document.querySelectorAll("script");
        scripts.forEach((script) => {
            const scriptContent = script.innerHTML;
            const newScript = document.createElement("script");
            newScript.text = scriptContent;
            document.body.appendChild(newScript);
        });
    }, [htmlContent]);


    if (htmlContent) {
        return (<div className="w-full" dangerouslySetInnerHTML={{ __html: htmlContent }} />)
    }

    if (image) {
        return (<div className="flex justify-center"><img src={image}></img></div>)
    }

};

export default ElectoralChart;
