"use client";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { message } from "antd";
import { TextArea } from "./TextArea";
import Faq from "./Faq";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { WhatsAppOutlined, CalendarOutlined } from "@ant-design/icons";
import Contact from "@/image/contactus/Contact.svg";
import Phone from "@/image/contactus/Phone.svg";
import Contactbanner from "@/image/contactus/ContactUsBackground.png";
import { postEnquiry } from "@/service/enquiry.service";
import { REACT_APP_RECAPTCHA_SITE_KEY } from "@/config/constant";
import { PhoneInputWithCountryCode } from "./PhoneInputWithCountryCode";
import { isPhoneValid, scrollToTop as ScrollToSection } from "@/util";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url('${Contactbanner.src}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <ScrollToSection />

      <section className="mt-[6rem] w-[95%] mx-auto mb-20 md:mb-24">
        <div
          className="w-full rounded-xl px-[14px] pb-[14px] md:pb-16 relative flex flex-col gap-9 md:gap-16 items-center"
          style={backgroundImageStyle}
        >
          <div className="flex flex-col justify-center items-center gap-6 md:gap-8 w-full md:w-[70%] mx-auto ">
            <h1 className="text-white text-center text-3xl md:text-5xl md:font-bold font-bold lg:leading-12 mt-8 md:mt-16">
              Contact us
            </h1>
            <div className="flex flex-row gap-4 md:gap-12">
              <div className="flex gap-2 justify-center items-center">
                <img
                  src={Contact.src}
                  alt="contact"
                  title="contact"
                  className="w-4 md:w-5"
                />
                <a
                  href="mailto:hello@mlexperts.ai"
                  className="text-white text-xs md:text-base"
                >
                  hello@mlexperts.ai
                </a>
              </div>

              <div className="flex gap-2 justify-center items-center text-nowrap">
                <img
                  src={Phone.src}
                  alt="phone"
                  title="phone"
                  className="w-4 md:w-5"
                />

                <a
                  href="tel:+9183759 92390"
                  className="text-white text-xs md:text-base"
                >
                  +91 83759 92390
                </a>
              </div>
            </div>
            <div className="flex gap-2 md:gap-6 flex-col md:flex-row md:mt-4">
              <a
                href="https://wa.me/+918375992390"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white rounded-full  px-4 py-2 text-[#6724FF] text-xs md:text-base font-medium hover:bg-transparent hover:text-white border border-white flex items-center gap-[10px]">
                  <WhatsAppOutlined /> Our Whatsapp
                </button>
              </a>

              <a
                href="https://calendly.com/rajesh-ramailotech/meeting-with-rajesh"
                target="blank"
                className="flex"
              >
                <button className="rounded-full bg-white w-full px-4 py-2 text-[#6724FF] text-xs md:text-base font-medium hover:bg-transparent hover:text-white border border-white flex items-center gap-[10px]">
                  <CalendarOutlined />
                  Schedule a call
                </button>
              </a>
            </div>
          </div>
          <div className="bg-white w-full md:w-[70vw] rounded-2xl p-5 md:p-12 shadow-custom">
            <EnquiryForm />
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
};

const INITIAL_FORM_VALUES = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
  phone: "",
};
function EnquiryForm() {
  const [data, setData] = useState(INITIAL_FORM_VALUES);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState({ phone: null });
  const navigate = useRouter();
  const submittedRef = useRef(false);
  const recaptchaRef = useRef(null);

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError((prevError) => ({
          ...prevError,
          email: "Please enter a valid email address",
        }));
      } else {
        setError((prevError) => ({
          ...prevError,
          email: null,
        }));
      }
    }
    setData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handlePhoneNumberChange = (phone) => {
    setData((prevData) => ({ ...prevData, phone }));
    if (submittedRef.current) {
      const isValidPhoneNumber = isPhoneValid(phone);
      if (isValidPhoneNumber)
        return setError((prevError) => ({ ...prevError, phone: null }));
      setError((prevError) => ({
        ...prevError,
        phone: "Please enter a valid phone number",
      }));
    }
  };

  /**
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (error.email || error.phone) {
        return;
      }
      submittedRef.current = true;
      const isValidPhoneNumber = isPhoneValid(data.phone);
      if (!isValidPhoneNumber) {
        return setError((prevError) => ({
          ...prevError,
          phone: "Please enter a valid phone number",
        }));
      }
      const token = await recaptchaRef.current.executeAsync();
      if (!token) throw new Error("Couldn't get captcha token");

      recaptchaRef.current.reset();

      setPosting(true);
      await postEnquiry({ ...data, token });
      setData(INITIAL_FORM_VALUES);
      submittedRef.current = false;
      navigate.push("/confirmation");
    } catch (err) {
      console.error(err);
      message.error("Couldn't send your enquiry!");
    } finally {
      setPosting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        <Input
          name="name"
          value={data.name}
          onChange={handleChange}
          className="placeholder:text-sm"
          label="Full name *"
          placeholder="Enter your name"
          required
        />
        <Input
          name="email"
          value={data.email}
          onChange={handleChange}
          className="placeholder:text-sm"
          type="email"
          label="Your email *"
          placeholder="example@domain.com"
          required
          error={error.email}
        />
        <Input
          name="company"
          value={data.company}
          onChange={handleChange}
          className="placeholder:text-sm"
          label="Company *"
          placeholder="Enter company name"
          required
        />
        <PhoneInputWithCountryCode
          value={data.phone}
          onChange={handlePhoneNumberChange}
          className="placeholder:text-sm"
          label="Phone *"
          placeholder="Enter phone number"
          defaultCountry="in"
          error={error.phone}
        />
        <div className="col-span-1 md:col-span-2">
          <Input
            name="subject"
            value={data.subject}
            onChange={handleChange}
            className="placeholder:text-sm"
            label="Subject *"
            placeholder="Enter subject"
            required
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <TextArea
            name="message"
            value={data.message}
            onChange={handleChange}
            className="placeholder:text-sm"
            label="Message *"
            required
            rows={6}
            placeholder="Type your message here..."
            showCount
            maxLength={750}
            style={{ resize: "none" }}
          />
        </div>
      </div>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={REACT_APP_RECAPTCHA_SITE_KEY}
      />

      <button
        className="rounded-lg px-4 py-2 text-white transition-all duration-500 bg-gradient-to-r from-[#F74C28] to-[#2671FF] hover:from-[#2671FF] hover:to-[#F74C28]"
        type="submit"
        disabled={posting}
      >
        {posting ? (
          <FontAwesomeIcon icon={faSpinner} className="animate-spin text-xl" />
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}

export default ContactPage;
