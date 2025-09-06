export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blush: "#FDE2E4",
                rose: "#E63946",
                gold: "#D4A373",
                emerald: "#2A9D8F",
                ivory: "#FFF9F2",
            },
            fontFamily: {
                playfair: ["Playfair Display", "serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
}