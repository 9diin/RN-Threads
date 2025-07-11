import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import "./global.css";

const appTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: "white",
        card: "#101010",
    },
};

export default function RootLayout() {
    return (
        <ThemeProvider value={appTheme}>
            <Slot />
        </ThemeProvider>
    );
}
