/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true, // 커스터마이징한 css 가 라이브러리보다 우선적으로 먹히기 위해서 사용
  theme: {
    extend: {
      keyframes: {
        showModalBg: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        showModalBox: {
          from: { opacity: "0", marginTop: "-50px" },
          to: { opacity: "1", marginTop: "0" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        loading: {
          "0%": {
            transform: " translateX(0)",
          },
          "50%": {},
          "100%": {
            transform: "translateX(400px)",
          },
        },
      },
      animation: {
        "spin-slow": "spin 5s ease infinite",
        "showmodal-bg": "showModalBg 0.3s ",
        "showmodal-box": "showModalBox 0.3s ",
        wiggle: "wiggle 1s ease-in-out infinite",
        shimmer: "loading 2s cubic-bezier(0.5, 0, 0.25, 1) infinite",
      },
      colors: {
        //primary
        "primary-tint": "rgba(227, 250, 252, 0.35)",
        "primary-light": "#e3fafc",
        "primary-default": "#15aabf", //rgb(21, 170, 191)
        "primary-dark": "#1098ad", //rgb(16, 152, 173)
        //Grayscale
        "gray-light": "#f9f9fb",
        "gray-default": "rgb(237, 240, 243)",
        "gray-dark": "rgb(145 161 180)", //#91a1b4
        "gray-hover": "rgba(0, 0, 0, 0.05)",

        "black-light": "#475569",
        "black-default": "#334155",
        "black-dark": "#1e293b",
        //tag&badge 와 같은 point color
        //*red
        "point-red-light": "rgb(253 164 175)",
        "point-red": "rgb(244 63 94)",
        "point-red-dark": "rgb(225 29 72)",
        //*yellow
        "point-yel-light": "rgb(253 230 138)",
        "point-yel": "rgb(252 211 77)",
        "point-yel-dark": "rgb(251 191 36)",
        //*green
        "point-gr-light": "#6ed8cd",
        "point-gr": "#47c6b9",
        "point-gr-dark": "#1eb7a7",
        //*blue
        "point-blue-light": "#7abef5",
        "point-blue": "#2b96ed",
        "point-blue-dark": "#1683db",
        //*indigo
        "point-indigo-light": "#9d9df9",
        "point-indigo": "#7374f3",
        "point-indigo-dark": "#5051e6",

        //shadow
        "primary-shadow": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "secondary-shadow": "rgb(0 0 0 / 20%) 0px 0px 0px 0.5px",
      },
      fontFamily: {
        Roboto: ["Roboto", "serif"],
        RobotoThin: ["Roboto Regular"],
        RobotoBold: ["Roboto Bold"],
        NotoSansKR: ["Noto Sans KR", "sans-serif"],
        rubik: ["var(--rubik)"],
      },
      screens: {
        desktop: "1120px",
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "480px" },
      },

      gridTemplateColumns: {
        "listpage-desktop": "269px minmax(1fr, 835px)",
      },
      backgroundImage: {
        shimmerGradient: "linear-gradient(to right, #e1e9ee, #f2f8fc, #e1e9ee)",
        colorpickerDefaultGradient:
          "linear-gradient(transparent, black), linear-gradient(to right, white, transparent)",
      },
    },
  },
  plugins: [],
};
