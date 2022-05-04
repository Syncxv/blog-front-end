import "../scss/main.scss";
import type { AppProps } from "next/app";
import ColorThemeContextProvider from "../context/ColorThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ColorThemeContextProvider>
            <Component {...pageProps} />
        </ColorThemeContextProvider>
    );
}

export default MyApp;
