module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi"],
  },
  test: /\.(png|jpe?g|gif|svg)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
}