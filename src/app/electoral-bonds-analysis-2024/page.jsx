"use client"
import { Button, Empty, Modal, Select, Spin, Table, message } from "antd";
import {
    DownloadOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { ElectoralDataColumn } from "./Assets";
import ElectoralChart from "@/components/ElectoralChart";
import StripedData from "../../components/StripedData";
import { baseUrl } from "@/config/constant";

function ElectoralData() {
    const [companies, setCompanies] = useState([]);
    const [companyId, setCompanyId] = useState(
        "31ab5c87-11b2-4eb8-9fc4-b96f34992bd3"
    );
    const [eachCompanyItems, setEachCompanyItems] = useState([]);
    const [allDetails, setAllDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [platform, setPlatform] = useState("");
    const [loading, setLoading] = useState(false);
    const [disable, setDisable] = useState(false);
    const [disableCompany, setDisableCompany] = useState(false);
    const [companyName, setCompanyName] = useState("");
    const [total_donation_amount, setTotalDonationAmount] = useState("");
    const [htmlContent, setHtmlContent] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [companyDetail, setCompanyDetail] = useState({});
    const [donations, setDonations] = useState([]);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const getAllCompanyName = async () => {
        try {
            const response = await axios.get(`${baseUrl}/companies/`);
            const options = response?.data?.data.map((item) => ({
                label: item.name,
                value: item.idx,
            }));
            setCompanies(options);
        } catch (error) { }
    };


    const getAllCompanyDetails = async () => {
        try {
            const response = await axios.get(`${baseUrl}/companies/${companyId}`);
            setCompanyDetail(response?.data?.data);
            setDisableCompany(true);
        } catch (error) { }
    };

    function formatDonationAmount(amount) {
        const croreAmount = amount / 10000000;
        const formattedAmount = `${croreAmount} Crore`;
        return formattedAmount;
    }

    const getEachCompanyInformation = async () => {
        if (companyId) setIsLoading(true);
        try {
            const response = await axios.get(`${baseUrl}/events/${companyId}`);
            const options = response?.data?.data.map((item) => ({
                title: new Date(item?.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                }),
            }));
            setDisable(true);
            setIsLoading(false);
            setAllDetails(response?.data?.data);
            const formattedAmount = formatDonationAmount(
                response?.data?.additional_details?.total_donation_amount
            );
            setTotalDonationAmount(formattedAmount);

            setEachCompanyItems(options);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const getChartHtml = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `${baseUrl}/graph/${companyId}?mode=html`
            );
            setHtmlContent(response?.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const getChartImage = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `${baseUrl}/graph/${companyId}?mode=jpeg`,
                {
                    responseType: "blob",
                }
            );
            const blob = new Blob([response.data], { type: "image/png" });
            const imgUrl = URL.createObjectURL(blob);
            setHtmlContent(imgUrl);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const downloadCsv = async () => {
        if (companyId) {
            try {
                const response = await axios.get(
                    `${baseUrl}/events/${companyId}/download`
                );
                const csvContent = response.data;
                const blob = new Blob([csvContent], { type: "text/csv" });
                const link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                link.download = "data.csv";
                link.download = `${companyName}.csv`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                message.success("CSV downloaded successfully !");
            } catch (error) {
                console.error(error);
            }
        }
    };

    const downloadAll = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.get(`${baseUrl}/events/overall-download`);
            const csvContent = response.data;
            const blob = new Blob([csvContent], { type: "text/csv" });
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = "overall-data-mlexperts.csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            message.success("CSV downloaded successfully !");
        } catch (error) {
            console.error(error);
        }
    };

    const setPlatformOnResize = () => {
        const { innerWidth: width, innerHeight: height } = window;
        if (width >= 768) {
            setPlatform("desktop");
        } else {
            setPlatform("mobile");
        }
    };

    const getAllFundDetails = async () => {
        try {
            const response = await axios.get(`${baseUrl}/funds/${companyId}`);
            setDonations(response?.data?.data?.donations);
        } catch (error) {
            console.log(error);
            setDonations([]);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("resize", setPlatformOnResize);
            return () => window.removeEventListener("resize", setPlatformOnResize);
        }
    }, []);

    useEffect(() => {
        getAllFundDetails();
        setPlatformOnResize();
        getEachCompanyInformation();
        getAllCompanyDetails();
        if (platform === "desktop") {
            getChartHtml();
        } else {
            getChartImage();
        }
    }, [companyId, platform]);

    useEffect(() => {
        getAllCompanyName();
    }, []);

    const handleChange = (value, label) => {
        setCompanyName(label?.children);
        setCompanyId(value);
    };

    return (
        <>


            <div className="mt-[7rem] mx-auto w-[95%] min-h-[60vh] flex flex-col gap-5">
                <div className="flex justify-center items-center">
                    <h1 class="md:text-3xl sm:text-xl text-xl font-bold bg-[#FFFF00] px-2">
                        Indian electoral bonds analysis - 2024
                    </h1>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <p className="bg-[#FFFF00] px-2">
                        Download the data across all companies from&nbsp;
                        <span
                            className="underline text-blue-500 cursor-pointer"
                            onClick={(e) => downloadAll(e)}
                        >
                            here
                        </span>
                    </p>
                    <p className=" text-xs">
                        [2 MB file. Takes 5-7 seconds for it to begin downloading]
                    </p>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-5">
                        <Select
                            showSearch={true}
                            className="md:w-60 sm:w-40 w-40"
                            defaultValue="FUTURE GAMING AND HOTEL SERVICES PRIVATE LIMITED"
                            placeholder="Please select company name"
                            onChange={handleChange}
                            filterOption={(input, option) =>
                                option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {companies.map((option) => (
                                <Select.Option key={option.value} value={option.value}>
                                    {option.label}
                                </Select.Option>
                            ))}
                        </Select>
                    </div>
                    <div>
                        <Button disabled={!disableCompany} onClick={showModal}>
                            Company Details
                        </Button>
                        <Modal
                            title="Company details"
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                        >
                            <p className=" font-semibold">{companyDetail?.name}</p>
                            {companyDetail?.product_and_services ||
                                companyDetail?.overall_summary ||
                                companyDetail?.description ||
                                companyDetail?.incorporation_date ||
                                companyDetail?.industry ? (
                                <p>
                                    <span className=" font-semibold">source: </span>
                                    <a href="https://www.tofler.in/">https://www.tofler.in/</a>
                                </p>
                            ) : (
                                <div>
                                    <Empty description={<p>No results were found.</p>} />
                                </div>
                            )}
                            {companyDetail?.product_and_services && (
                                <p>
                                    <span className=" font-semibold">Product and services: </span>{" "}
                                    {companyDetail?.product_and_services}
                                </p>
                            )}
                            {companyDetail?.description && (
                                <p>
                                    <span className=" font-semibold">Description: </span>
                                    {companyDetail?.description}
                                </p>
                            )}
                            {companyDetail?.overall_summary && (
                                <p>
                                    <span className=" font-semibold"> Overall summary: </span>
                                    {companyDetail?.overall_summary}
                                </p>
                            )}
                            {companyDetail?.category && (
                                <p>
                                    <span className=" font-semibold">Category: </span>
                                    {companyDetail?.category}
                                </p>
                            )}
                            {companyDetail?.industry && (
                                <p>
                                    <span className=" font-semibold">Industry: </span>
                                    {companyDetail?.industry}
                                </p>
                            )}
                            {companyDetail?.incorporation_date && (
                                <p>
                                    <span className=" font-semibold">Incorporation date: </span>
                                    {companyDetail?.incorporation_date}
                                </p>
                            )}
                            {companyDetail?.registered_address && (
                                <p>
                                    <span className=" font-semibold">Registered address: </span>
                                    {companyDetail?.registered_address}
                                </p>
                            )}
                            {companyDetail?.directors?.length > 0 && (
                                <p>
                                    <span className=" font-semibold">Directors: </span>
                                    {companyDetail?.directors?.map((item, index) => (
                                        <span key={index}>{item?.name}, &nbsp;</span>
                                    ))}
                                </p>
                            )}
                        </Modal>
                    </div>
                </div>
                <div className="flex gap-5"></div>

                {loading ? (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "50vh",
                        }}
                    >
                        <Spin size="large" />
                    </div>
                ) : (
                    <>
                        <div className="flex justify-center">
                            {platform == "mobile" && <ElectoralChart image={htmlContent} />}
                            {platform == "desktop" && (
                                <ElectoralChart htmlContent={htmlContent} />
                            )}
                        </div>
                        <div>
                            <div className="table-header-container flex justify-between">
                                &nbsp;
                                {companyName && (
                                    <h2 className="flex bg-[#FFFF00] px-2 justify-center gap-5 md:text-3xl sm:text-base text-base">
                                        {companyName}
                                    </h2>
                                )}
                                <Button
                                    disabled={!disable}
                                    icon={<DownloadOutlined />}
                                    onClick={downloadCsv}
                                >
                                    CSV
                                </Button>
                            </div>
                            <div className="flex  justify-center  mt-5 mb-5 items-center md:text-xl sm:text-base text-base ">
                                {total_donation_amount && (
                                    <p>
                                        <span className="bg-[#FFFF00] px-2">
                                            Total Donation Amount :
                                        </span>{" "}
                                        ₹{total_donation_amount}
                                    </p>
                                )}
                            </div>
                            {donations && (
                                <div>
                                    <StripedData data={donations} />
                                </div>
                            )}
                            <Table
                                columns={ElectoralDataColumn}
                                scroll={{ x: "1100" }}
                                dataSource={allDetails}
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default ElectoralData;
