module.exports = {
    darkMode: "class",
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                "auto-fit": "repeat(auto-fit, minmax(23rem, 1fr))",
            },
            colors: {
                "dark-primary": "var(--dark-primary)",
                "dark-secondary": "var(--dark-secondary)",
                "dark-secondary-400": "var(--dark-secondary-400)",
                "dark-action": "var(--dark-action)",
                "light-primary": "var(--light-primary)",
                "light-secondary": "var(--light-secondary)",
                "light-action": "var(--light-action)",
            },
        },
    },
    plugins: [],
};
