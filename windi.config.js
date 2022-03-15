import colors from "windicss/colors"
import { defineConfig } from "windicss/helpers"

export default defineConfig({
  extract: {
    // Note: JSX usage is experimental. report any issues if find.
    include: ["**/*.{jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },

  theme: {
    colors: {
      "bg-left": "#984D38",
      "bg-right": "#181E41",
      ...colors,
    },

    textColor: {
      primary: "#1e4151",
      secondary: "#ffed4a",
      danger: "#e3342f",
      ...colors,
    },

    extend: {
      fontFamily: {
        sans: "Helvetica, Arial, sans-serif",
      },
    },
  },
})
