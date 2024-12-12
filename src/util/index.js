"use client";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PhoneNumberUtil } from "google-libphonenumber";
import { useEffect } from "react";

const phoneUtil = PhoneNumberUtil.getInstance();

/**
 * Merges class names using `twMerge` and `clsx`.
 * @param {ClassValue[]} classes - The class names to merge.
 * @returns {string} The merged class names.
 */
export const cn = (...classes) => twMerge(clsx(...classes));

/**
 * Validates whether the given string is a valid phone number.
 * @param {string} phone - The phone number.
 * @returns {boolean} is valid phone?
 */
export const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
    if (typeof window !== "undefined") {
      window.location.hash = `#${id}`;
    }
  }
};

export const scrollToTop = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);
};
