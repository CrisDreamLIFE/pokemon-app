import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "light": {
        "colors": {
          "default": {
            "50": "#fafafa",
            "100": "#f2f2f3",
            "200": "#ebebec",
            "300": "#e3e3e6",
            "400": "#dcdcdf",
            "500": "#d4d4d8",
            "600": "#afafb2",
            "700": "#8a8a8c",
            "800": "#656567",
            "900": "#404041",
            "foreground": "#000",
            "DEFAULT": "#d4d4d8"
          },
          "primary": {
            "50": "#e7f9df",
            "100": "#c5f1b3",
            "200": "#a4e986",
            "300": "#82e159",
            "400": "#61d92d",
            "500": "#3fd100",
            "600": "#34ac00",
            "700": "#298800",
            "800": "#1e6300",
            "900": "#133f00",
            "foreground": "#000",
            "DEFAULT": "#3fd100"
          },
          "secondary": {
            "50": "#eadff5",
            "100": "#ccb3e6",
            "200": "#af86d8",
            "300": "#9159ca",
            "400": "#742dbb",
            "500": "#5600ad",
            "600": "#47008f",
            "700": "#380070",
            "800": "#290052",
            "900": "#1a0034",
            "foreground": "#fff",
            "DEFAULT": "#5600ad"
          },
          "success": {
            "50": "#e2f8ec",
            "100": "#b9efd1",
            "200": "#91e5b5",
            "300": "#68dc9a",
            "400": "#40d27f",
            "500": "#17c964",
            "600": "#13a653",
            "700": "#0f8341",
            "800": "#0b5f30",
            "900": "#073c1e",
            "foreground": "#000",
            "DEFAULT": "#17c964"
          },
          "warning": {
            "50": "#fef4e4",
            "100": "#fce4bd",
            "200": "#fad497",
            "300": "#f9c571",
            "400": "#f7b54a",
            "500": "#f5a524",
            "600": "#ca881e",
            "700": "#9f6b17",
            "800": "#744e11",
            "900": "#4a320b",
            "foreground": "#000",
            "DEFAULT": "#f5a524"
          },
          "danger": {
            "50": "#fee1eb",
            "100": "#fbb8cf",
            "200": "#f98eb3",
            "300": "#f76598",
            "400": "#f53b7c",
            "500": "#f31260",
            "600": "#c80f4f",
            "700": "#9e0c3e",
            "800": "#73092e",
            "900": "#49051d",
            "foreground": "#000",
            "DEFAULT": "#f31260"
          },
          "background": "#ffffff",
          "foreground": {
            "50": "#dfdfdf",
            "100": "#b3b3b3",
            "200": "#868686",
            "300": "#595959",
            "400": "#2d2d2d",
            "500": "#000000",
            "600": "#000000",
            "700": "#000000",
            "800": "#000000",
            "900": "#000000",
            "foreground": "#fff",
            "DEFAULT": "#000000"
          },
          "content1": {
            "DEFAULT": "#ffffff",
            "foreground": "#000"
          },
          "content2": {
            "DEFAULT": "#f4f4f5",
            "foreground": "#000"
          },
          "content3": {
            "DEFAULT": "#e4e4e7",
            "foreground": "#000"
          },
          "content4": {
            "DEFAULT": "#d4d4d8",
            "foreground": "#000"
          },
          "focus": "#8789ff",
          "overlay": "#000000",
          "divider": "#111111"
        }
      },
      "dark": {
        "colors": {
          "default": {
            "50": "#e7e7e8",
            "100": "#c5c5c8",
            "200": "#a4a4a7",
            "300": "#828287",
            "400": "#616166",
            "500": "#3f3f46",
            "600": "#34343a",
            "700": "#29292e",
            "800": "#1e1e21",
            "900": "#131315",
            "foreground": "#fff",
            "DEFAULT": "#3f3f46"
          },
          "primary": {
            "50": "#e7f9df",
            "100": "#c5f1b3",
            "200": "#a4e986",
            "300": "#82e159",
            "400": "#61d92d",
            "500": "#3fd100",
            "600": "#34ac00",
            "700": "#298800",
            "800": "#1e6300",
            "900": "#133f00",
            "foreground": "#000",
            "DEFAULT": "#3fd100"
          },
          "secondary": {
            "50": "#eadff5",
            "100": "#ccb3e6",
            "200": "#af86d8",
            "300": "#9159ca",
            "400": "#742dbb",
            "500": "#5600ad",
            "600": "#47008f",
            "700": "#380070",
            "800": "#290052",
            "900": "#1a0034",
            "foreground": "#fff",
            "DEFAULT": "#5600ad"
          },
          "success": {
            "50": "#e2f8ec",
            "100": "#b9efd1",
            "200": "#91e5b5",
            "300": "#68dc9a",
            "400": "#40d27f",
            "500": "#17c964",
            "600": "#13a653",
            "700": "#0f8341",
            "800": "#0b5f30",
            "900": "#073c1e",
            "foreground": "#000",
            "DEFAULT": "#17c964"
          },
          "warning": {
            "50": "#fef4e4",
            "100": "#fce4bd",
            "200": "#fad497",
            "300": "#f9c571",
            "400": "#f7b54a",
            "500": "#f5a524",
            "600": "#ca881e",
            "700": "#9f6b17",
            "800": "#744e11",
            "900": "#4a320b",
            "foreground": "#000",
            "DEFAULT": "#f5a524"
          },
          "danger": {
            "50": "#fee1eb",
            "100": "#fbb8cf",
            "200": "#f98eb3",
            "300": "#f76598",
            "400": "#f53b7c",
            "500": "#f31260",
            "600": "#c80f4f",
            "700": "#9e0c3e",
            "800": "#73092e",
            "900": "#49051d",
            "foreground": "#000",
            "DEFAULT": "#f31260"
          },
          "background": "#191827",
          "foreground": {
            "50": "#ffffff",
            "100": "#ffffff",
            "200": "#ffffff",
            "300": "#ffffff",
            "400": "#ffffff",
            "500": "#ffffff",
            "600": "#d2d2d2",
            "700": "#a6a6a6",
            "800": "#797979",
            "900": "#4d4d4d",
            "foreground": "#000",
            "DEFAULT": "#ffffff"
          },
          "content1": {
            "DEFAULT": "#18181b",
            "foreground": "#fff"
          },
          "content2": {
            "DEFAULT": "#27272a",
            "foreground": "#fff"
          },
          "content3": {
            "DEFAULT": "#3f3f46",
            "foreground": "#fff"
          },
          "content4": {
            "DEFAULT": "#52525b",
            "foreground": "#fff"
          },
          "focus": "#8789ff",
          "overlay": "#940505",
          "divider": "#ffffff"
        }
      }
    },
    layout: {
      "fontSize": {
        "tiny": "0.75rem",
        "small": "0.875rem",
        "medium": "1rem",
        "large": "1.125rem"
      },
      "lineHeight": {
        "tiny": "1rem",
        "small": "1.25rem",
        "medium": "1.5rem",
        "large": "1.75rem"
      },
      "radius": {
        "small": "0.5rem",
        "medium": "0.75rem",
        "large": "0.875rem"
      },
      "borderWidth": {
        "small": "1px",
        "medium": "2px",
        "large": "3px"
      },
      "disabledOpacity": "0.5",
      "dividerWeight": "1",
      "hoverOpacity": "0.9"
    }
})],
};
