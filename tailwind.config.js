/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#FADADD",
                secondary: "#D1C4E9",
                "background-light": "#FAFAFA",
                "background-dark": "#18181b",
                "text-light": "#6B7280",
                "text-dark": "#D1D5DB",
                "heading-light": "#111827",
                "heading-dark": "#F9FAFB",
                "surface-light": "#F3F4F6",
                "surface-dark": "#1F2937",
                "heading-grey": "#9CA3AF",
            },
            fontFamily: {
                sans: ["DM Sans", "Poppins", "sans-serif"],
                display: ["Playfair Display", "Poppins", "serif"],
            },
            borderRadius: {
                xl: "20px",
                "2xl": "24px",
                DEFAULT: "1rem",
            },
        },
    },
    plugins: [],
}
