const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    groups: ["default", "main", "sub"],
    extend: {
      fontSize: {
        xxs: ["10px", "15px"],
      },
    },
  },
  plugins: [
    plugin(({ addVariant, theme }) => {
      const groups = theme("groups") || [];

      groups.forEach((group) => {
        addVariant(`group-${group}-hover`, () => {
          return `:merge(.group-${group}):hover &`;
        });
      });
    }),
    require("daisyui"),
  ],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
    //darkTheme: "dark",
  },
};
