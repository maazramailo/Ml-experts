import React from "react";

const ElectoralMethod = () => {

    return (
        <>

            <div className="mt-[7rem] font-sans mx-auto w-[90%] px-4 flex flex-col gap-4 mb-10">
                <div className=" flex items-start justify-start">
                    <h1 className="text-black text-start text-lg md:text-2xl  font-medium  lg:leading-12">
                        Method summary
                    </h1>
                </div>
                <div className="flex justify-start ">
                    <div className=" flex flex-col gap-[20px]">
                        <ol className=" list-disc flex flex-col gap-4 ml-5">
                            <li>
                                {" "}
                                <div className="self-stretch relative text-base md:text-lg leading-[140%] ">
                                    Data and visualizations cover company names, total donated
                                    amount, raids information, contract awarded information, and
                                    other news.
                                </div>
                            </li>
                            <li>
                                {" "}
                                <div className="self-stretch relative text-base md:text-lg leading-[140%] ">
                                    Company names and total donated amounts were extracted from
                                    PDFs released by the election commission on 14 March 2023.
                                </div>
                            </li>
                            <li>
                                {" "}
                                <div className="self-stretch relative text-base md:text-lg leading-[140%] ">
                                    Raids, contracts awarded, and other news were gathered using
                                    GPT-4 with internet access, DuckDuckGo search API, and Bing
                                    search API.
                                </div>
                            </li>
                            <li>
                                {" "}
                                <div className="self-stretch relative text-base md:text-lg leading-[140%] ">
                                    GPT-4 with specific prompts, DuckDuckGo, and Bing search APIs
                                    were utilized to extract news information pertaining to raids,
                                    contracts, and other relevant news.
                                </div>
                            </li>
                            <li>
                                {" "}
                                <div className="self-stretch relative text-base md:text-lg leading-[140%] ">
                                    Outputs from the three sources were then consolidated, and the
                                    most accurate results were manually selected for use in the
                                    dashboard.
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className=" flex items-start justify-start mt-5">
                    <h1 className="text-black text-start text-lg md:text-2xl  font-medium  lg:leading-12">
                        Limitations
                    </h1>
                </div>
                <div className="flex justify-start ">
                    <div className=" flex flex-col gap-[20px]">
                        <ol className=" list-disc flex flex-col gap-4 ml-5">
                            <li>
                                {" "}
                                <div className="self-stretch relative text-base md:text-lg leading-[140%] ">
                                    While efforts have been made to verify data from multiple
                                    sources, minor inaccuracies in dates, descriptions, and
                                    referenced web links may occur.
                                </div>
                            </li>
                            <li>
                                {" "}
                                <div className="self-stretch relative text-base md:text-lg leading-[140%] ">
                                    The information provided may not cover all noteworthy events
                                    related to raids, contracts, and relevant news concerning a
                                    company.
                                </div>
                            </li>
                            <li>
                                {" "}
                                <div className="self-stretch relative text-base md:text-lg leading-[140%] ">
                                    The dashboard's information allows for preliminary correlation
                                    analysis, and requires further detailed examination to
                                    determine causation.
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
        // <div className="mt-[7rem] mx-auto w-[95%] flex flex-col gap-10">
        //   <div className="w-[149px] relative hidden" />
        //   <div className=" flex flex-col justify-start items-start gap-6 md:gap-6 w-full mx-auto ">
        //     <h1 className="text-black text-start text-lg md:text-2xl font-medium  lg:leading-12">
        //       MLExperts.ai specializes in strategic consulting, prototyping, and
        //       product integration of AI, ML, and data science solutions.
        //     </h1>
        //     <div className="text-lg md:text-2xl ">
        //       The group is led by a team of researchers and engineering leaders from
        //       top academic and industry backgrounds.
        //     </div>
        //   </div>

        //   <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-center text-31xl text-black font-mulish">
        //     <div className="flex flex-col items-start justify-start max-w-full">
        //       <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        //         <h1 className="m-0 self-stretch relative text-inherit leading-[110%] font-extrabold font-inherit text-3xl">
        //           <span>{`The fields are `}</span>
        //           <span className="">populated</span>
        //           <span>{` in the following ways: `}</span>
        //         </h1>
        //       </div>
        //       <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-color mq750:gap-[40px_80px] mq450:gap-[20px_80px]">
        //         <div className="self-stretch rounded-xl  overflow-hidden flex flex-col items-start justify-start md:p-12 sm:p-3 p-3 gap-[49px]">
        //           <div className="flex flex-col items-start text-3xl text-[#] justify-start gap-[20px]">
        //             <div className="relative leading-[110%] font-black inline-block min-w-[60px] mq750:text-21xl mq750:leading-[44px] mq450:text-11xl mq450:leading-[33px]">
        //               01
        //             </div>
        //             <h2 className="m-0 relative text-13xl leading-[110%] font-bold font-inherit text-darkslategray-200 mq750:text-7xl mq750:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
        //               Company name
        //             </h2>
        //           </div>
        //           <div className="self-stretch relative md:text-2xl sm:text-lg text-lg leading-[150%]">
        //             Company name extraction: The company names were obtained from
        //             the PDFs released by the election commission on March 14, 2023.
        //             Entries were scrubbed for duplicates and near-duplicates. For
        //             example FUTURE GAMING AND HOTEL SERVICES PR and FUTURE GAMING
        //             AND HOTEL SERVICES PRIVATE LIMITED were merged.
        //           </div>
        //         </div>
        //         <div className=" rounded-xl overflow-hidden flex flex-col items-start justify-start md:p-12 sm:p-3 p-3 box-border gap-[49px]">
        //           <div className="flex flex-col items-start text-[#] text-3xl justify-start gap-[20px]">
        //             <div className="relative leading-[110%] font-black inline-block min-w-[60px] mq750:text-21xl mq750:leading-[44px] mq450:text-11xl mq450:leading-[33px]">
        //               02
        //             </div>
        //             <h2 className="m-0 relative text-13xl leading-[110%] font-bold font-inherit text-darkslategray-200 mq750:text-7xl mq750:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
        //               Total donated amount
        //             </h2>
        //           </div>
        //           <div className="relative md:text-2xl sm:text-lg text-lg leading-[150%] ">
        //             The total donated amount was also extracted from the PDFs
        //             released by the election commission on 14 March 2023.
        //           </div>
        //         </div>
        //         <div className="self-stretch rounded-xl overflow-hidden flex flex-col items-start justify-start md:p-12 sm:p-3 p-3 box-border gap-[49px] max-w-full text-xl ">
        //           <div className="flex flex-col items-start justify-start gap-[20px] max-w-full text-[#] text-3xl">
        //             <div className="relative leading-[110%] font-black inline-block min-w-[60px] mq750:text-21xl mq750:leading-[44px] mq450:text-11xl mq450:leading-[33px]">
        //               03
        //             </div>
        //             <h2 className="m-0 relative text-13xl leading-[110%] font-bold font-inherit text-darkslategray-200 mq750:text-7xl mq750:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
        //               Information on raids, contract, other news
        //             </h2>
        //           </div>
        //           <div className="w-[1260px] flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border gap-[24px] max-w-full">
        //             <div className="self-stretch relative leading-[150%] md:text-2xl sm:text-lg text-lg">
        //               <p className="m-0">
        //                 Information on raids, contracts awarded, and other news
        //                 related to each mentioned company was gathered through two
        //                 methods: utilizing GPT-4 and employing search engine APIs
        //                 for pertinent data. The findings from both approaches were
        //                 combined, reviewed manually, and consolidated to prevent any
        //                 inaccuracies.
        //               </p>
        //               <p className="m-0">
        //                 Details on the two methods are described below:
        //               </p>
        //               <p className="m-0">
        //                 <b>&nbsp;</b>
        //               </p>
        //               <ol className="m-0 text-inherit pl-8 md:text-3xl sm:text-lg text-lg">
        //                 <li className="mb-0">
        //                   <b>GPT-4 with internet access: </b>
        //                   <span className=" md:text-2xl sm:text-lg text-lg">
        //                     OpenAI’s paid service of GPT version 4 with access to a
        //                     web browser was used to extract information on raids,
        //                     contracts, and other news for each company. The prompts
        //                     used to extract information have been described below.
        //                   </span>
        //                 </li>
        //               </ol>
        //               <p className="m-0">
        //                 <b>&nbsp;</b>
        //               </p>
        //               <ol className="m-0 text-inherit pl-8 md:text-3xl sm:text-lg text-lg">
        //                 <li className="mb-0">
        //                   <b>Post Processing</b>
        //                   <span className="md:text-2xl sm:text-lg text-lg">
        //                     {" "}
        //                     : Manual verification of the generated events by going
        //                     through the links.
        //                   </span>
        //                 </li>
        //               </ol>
        //               <p className="m-0">&nbsp;</p>
        //               <ol className="m-0 text-inherit pl-8">
        //                 <li>
        //                   <b>Prompts</b>
        //                 </li>
        //               </ol>
        //             </div>
        //             <div className="w-[248px] flex flex-row items-start justify-start py-0 px-[26px] box-border text-black">
        //               <div className="flex-1 relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
        //                 <ul className="m-0 font-inherit text-inherit pl-[27px]">
        //                   <li>Contracts Prompt</li>
        //                 </ul>
        //               </div>
        //             </div>
        //             <div>
        //               <div className="flex-1 rounded-xl bg-white shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start md:p-6 sm:p-2 p-2 box-border">
        //                 <div className="flex-1 relative leading-[150%] font-semibold inline-block">
        //                   <p className="m-0">{`“””Can you tell me any government projects or contracts that have been awarded to the company <<Company Name>> since January 2019.`}</p>
        //                   <p className="m-0">&nbsp;</p>
        //                   <p className="m-0">
        //                     Use this json format to report your results:
        //                   </p>
        //                   <p className="m-0">[</p>
        //                   <p className="m-0">{`   { "company_name":  name of company,`}</p>
        //                   <p className="m-0">
        //                          "contract_name":  name of contract,
        //                   </p>
        //                   <p className="m-0">    "contract_date": date,</p>
        //                   <p className="m-0">   "description": brief summary,</p>
        //                   <p className="m-0">    "link": web link,</p>
        //                   <p className="m-0">{`    },`}</p>
        //                   <p className="m-0">]</p>
        //                   <p className="m-0">&nbsp;</p>
        //                   <p className="m-0">Follow the guidelines:</p>
        //                   <p className="m-0">
        //                     1. Strictly output the results in json format above
        //                     without any explanation.
        //                   </p>
        //                   <p className="m-0">
        //                     2. Date should be in iso format(YYYY-MM-DD)”””
        //                   </p>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //           <div className=" flex flex-row items-start justify-start pt-0 pb-[13px] box-border text-black">
        //             <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
        //               <div className="w-[158px] relative leading-[150%] font-semibold inline-block ">
        //                 <ul className="m-0 font-inherit text-inherit">
        //                   <li>Raids Prompt</li>
        //                 </ul>
        //               </div>
        //               <div>
        //                 <div className="w-full flex-1 rounded-xl bg-white shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start md:p-6 sm:p-2 p-2 box-border">
        //                   <div className="relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
        //                     <p className="m-0">{`"””Can you tell me any raids that have taken place on the company <Company Name> since January 2019  till today.`}</p>
        //                     <p className="m-0">&nbsp;</p>
        //                     <p className="m-0">
        //                       Use this json format to report your results:
        //                     </p>
        //                     <p className="m-0">[</p>
        //                     <p className="m-0">{`   { "company_name":  name of company,`}</p>
        //                     <p className="m-0">    "raid_date": date,</p>
        //                     <p className="m-0">   "description": brief summary,</p>
        //                     <p className="m-0">    "link": web link,</p>
        //                     <p className="m-0">{`    },`}</p>
        //                     <p className="m-0">]</p>
        //                     <p className="m-0">&nbsp;</p>
        //                     <p className="m-0">Follow the guidelines:</p>
        //                     <ol className="m-0 font-inherit text-inherit pl-[27px]">
        //                       <li className="mb-0">
        //                         Strictly output the results in json format above
        //                         without any explanation.
        //                       </li>
        //                       <li className="mb-0">
        //                         Date should be in iso format(YYYY-MM-DD)
        //                       </li>
        //                     </ol>
        //                     <p className="m-0">       “””</p>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //           <div className="flex flex-row items-start justify-start pt-0 pb-9 box-border max-w-full text-black">
        //             <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full ">
        //               <div className="relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
        //                 <ul className="m-0 font-inherit text-inherit ">
        //                   <li>Awards | News Prompt</li>
        //                 </ul>
        //               </div>
        //               <div>
        //                 <div className="flex-1 rounded-xl bg-white shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start md:p-5 sm:p-2 p-2 box-border max-w-full">
        //                   <div className="flex-1 relative leading-[150%] font-semibold inline-block ">
        //                     <p className="m-0">{`“””can you tell me any significant event | news | awards  in relation with company <<Company Name>>`}</p>
        //                     <p className="m-0">  since January 2019.</p>
        //                     <p className="m-0">&nbsp;</p>
        //                     <p className="m-0">
        //                       Use this json format to report your results:
        //                     </p>
        //                     <p className="m-0">[</p>
        //                     <p className="m-0">{`   { "company_name":  name of company,`}</p>
        //                     <p className="m-0">"event_title": title of event</p>
        //                     <p className="m-0">    "event_date": date,</p>
        //                     <p className="m-0">   "description": brief summary,</p>
        //                     <p className="m-0">    "link": web link,</p>
        //                     <p className="m-0">{`    },`}</p>
        //                     <p className="m-0">]</p>
        //                     <p className="m-0">&nbsp;</p>
        //                     <p className="m-0">Follow the guidelines:</p>
        //                     <p className="m-0">
        //                        1.Strictly output the results in json format above
        //                       without any explanation.
        //                     </p>
        //                     <p className="m-0">
        //                        2.Date should be in iso format(YYYY-MM-DD)
        //                     </p>
        //                     <p className="m-0">“””</p>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //           <div className=" w-full relative  leading-[150%]">
        //             <ol className="m-0 text-inherit">
        //               <li className="mb-0">
        //                 <b className=" md:text-3xl sm:text-lg text-lg">
        //                   Duck-duck go search API
        //                 </b>
        //                 <span className="md:text-2xl sm:text-lg text-lg">
        //                   : The DuckDuckGo search tool provided by Langchain (
        //                 </span>
        //                 <a
        //                   className="text-[inherit]"
        //                   href="https://python.langchain.com/docs/integrations/tools/ddg"
        //                   target="blank"
        //                 >
        //                   <span>
        //                     <span className="[text-decoration:underline] md:text-2xl sm:text-lg text-lg">
        //                       https://python.langchain.com/docs/integrations/tools/ddg
        //                     </span>
        //                   </span>
        //                 </a>
        //                 <span className="md:text-2xl sm:text-lg text-lg">
        //                   ) was used to extract news information related to raids,
        //                   contracts, and news. Subsequently, this information was
        //                   provided as context to GPT-4-Turbo-1106 to translate the
        //                   search results into structured JSON information.
        //                 </span>
        //               </li>
        //             </ol>
        //             <p className="m-0">
        //               <span>&nbsp;</span>
        //             </p>
        //             <ol className="m-0 text-inherit">
        //               <li className="mb-0">
        //                 <b className=" md:text-3xl sm:text-lg text-lg">{`Bing search API:  The Bing news API: `}</b>
        //                 <span className="font-medium">(</span>
        //                 <a
        //                   className="text-[inherit]"
        //                   href="https://www.microsoft.com/en-us/bing/apis/bing-news-search-api"
        //                   target="_blank"
        //                 >
        //                   <span className="">
        //                     <span className="[text-decoration:underline] md:text-2xl sm:text-lg text-lg">
        //                       https://www.microsoft.com/en-us/bing/apis/bing-news-search-api
        //                     </span>
        //                   </span>
        //                 </a>
        //                 <span className=" md:text-2xl sm:text-lg text-lg">
        //                   ) was used to retrieve the top 10 results related to
        //                   raids, contracts, and news for each company. Subsequently,
        //                   this information was provided as context to
        //                   GPT-4-Turbo-1106 to translate the search results into
        //                   structured JSON

        //                 </span>
        //               </li>
        //               <li className="mt-5">
        //                 <b className=" md:text-3xl  sm:text-lg text-lg">{`Consolidation of results from (c), (d), (e): `}</b>
        //                 <span className=" font-mulish md:text-2xl sm:text-lg text-lg">
        //                   A manual review of the outputs obtained from three
        //                   sources: the GPT-4 model, the DuckDuckGo search engine,
        //                   and the Bing search API was performed. Best and most
        //                   accurate results among the three were selected for use in
        //                   the dashboard.
        //                 </span>
        //               </li>
        //             </ol>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </section>
        //   <section>
        //     <div className="flex justify-start ">
        //       <div className="flex-1 flex flex-col md:text-3xl sm:text-lg text-lg ">
        //         <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq750:gap-[16px_32px]">
        //           <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-extrabold ">
        //             <span>Limitations of this analysis</span>
        //             <span className="text-darkslategray-200">
        //               {" "}
        //               that we should be upfront about
        //             </span>
        //           </h1>
        //           <div className="self-stretch relative leading-[150.54%]">
        //             <ol className="m-0 font-inherit text-inherit pl-8 list-decimal">
        //               <li className="mb-0">
        //                 <div className="md:text-2xl sm:text-lg text-lg">
        //                   {" "}
        //                   While efforts have been made to verify data from multiple
        //                   sources, minor inaccuracies in dates, descriptions, and
        //                   referenced web links may occur.
        //                 </div>
        //               </li>
        //               <li className="mb-0">
        //                 <div className="md:text-2xl sm:text-lg text-lg ">
        //                   The information provided may not cover all noteworthy
        //                   events related to raids, contracts, and relevant news
        //                   concerning a company.
        //                 </div>
        //               </li>
        //               <li>
        //                 <div className="md:text-2xl sm:text-lg text-lg ">
        //                   The dashboard's information allows for preliminary
        //                   correlation analysis, and requires further detailed
        //                   examination to determine causation.
        //                 </div>
        //               </li>
        //             </ol>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </section>
        // </div>
    );
};

export default ElectoralMethod;
