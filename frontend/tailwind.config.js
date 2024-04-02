const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            "anep-yellow": "#ffd200",
            "anep-light-blue": "#58affc",
            "anep-primary": "#035179",
            "anep-primary-light": "#046a9f",
            "anep-primary-dark": "#03496d",
            "anep-secondary": "#edf2f9",
            "anep-light": "#d9e3ec",
            "anep-dark": "#303030"
        },
        fontFamily: {
            cairo: ["Cairo", "sans-serif"]
        },
        dropShadow: {
            "black-sm": ["0 2px 4px rgb(0 0 0 / 0.5)"],
            "white-custom": ["0 0px 4px rgb(255 255 255)"]
        },
        boxShadow: {
            "anep-primary-inset":
                "inset 5px 5px 10px #023149, inset -5px -5px 10px #0471a9"
        },
        screens: {
            "sm-max": { max: "639px" },
            "md-max": { max: "767px" },
            "lg-max": { max: "1023px" },
            "xl-max": { max: "1279px" },
            "2xl-max": { max: "1535px" },
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px"
        }
    }
},
  plugins: [],
});
