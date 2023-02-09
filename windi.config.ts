import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

const rem = 16;
const array = (max) => new Array(max).fill(0).map((_, index) => index);

export const pxToRem = (px) => Math.round((px / rem) * 100) / 100 + "rem";

const spacing = array(300).reduce(
  (acc, spacing) => ({ ...acc, [spacing]: pxToRem(spacing) }),
  {}
);
const borderRadius = array(100).reduce(
  (acc, borderRadius) => ({ ...acc, [borderRadius]: pxToRem(borderRadius) }),
  {}
);
const fontSize = array(100).reduce(
  (acc, fontSize) => ({ ...acc, [fontSize]: pxToRem(fontSize) }),
  {}
);
const lineHeight = array(40).reduce(
  (acc, lineHeight) => ({ ...acc, [lineHeight]: pxToRem(lineHeight) }),
  {}
);

export default defineConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./orchestra/**/*.{js,jsx,ts,tsx}",
    "./orchestra/**/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontSize: {
        ...fontSize,
        28: pxToRem(28),
        30: pxToRem(30),
        36: pxToRem(36),
        24: pxToRem(24),
      },
      lineHeight: {
        ...lineHeight,
        none: "1",
        normal: "1.5",
      },
      screens: {
        xl: { max: "1440px" },
        lg: { max: "1280px" },
        md: { max: "992px" },
        sm: { max: "768px" },
        xs: { max: "576px" },
      },
      spacing: {
        ...spacing,
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      borderRadius: {
        ...borderRadius,
      },
      maxWidth: {
        ...spacing,
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        screen: "100vw",
        fit: "fit-content",
      },
      minWidth: {
        ...spacing,
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        screen: "100vw",
        fit: "fit-content",
      },
      maxHeight: {
        ...spacing,
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        screen: "100vw",
        fit: "fit-content",
      },
      minHeight: {
        ...spacing,
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        screen: "100vw",
        fit: "fit-content",
      },
      width: {
        ...spacing,
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        screen: "100vw",
        fit: "fit-content",
        inherit: "inherit",
        auto: "auto",
      },
      height: {
        ...spacing,
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        screen: "100vh",
        fit: "fit-content",
        inherit: "inherit",
        auto: "auto",
      },
      backgroundImage: () => ({}),
    },
  },
  plugins: [formsPlugin],
});
