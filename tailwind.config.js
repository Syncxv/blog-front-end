module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-primary": "var(--dark-primary)",
                "dark-secondary": "var(--dark-secondary)",
                "dark-secondary-400": "var(--dark-secondary-400)",
                "dark-action": "var(--dark-action)",
                "light-primary": "var(--light-primary)",
            },
        },
    },
    plugins: [],
};
