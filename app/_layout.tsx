import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";

const appTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: "white",
    },
};

export default function RootLayout() {
    return (
        <ThemeProvider value={appTheme}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </ThemeProvider>
    );
}
