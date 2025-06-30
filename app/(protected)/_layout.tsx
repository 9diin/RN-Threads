import { Stack } from "expo-router";

export default function ProtectedLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="new" options={{ title: "새로운 스레드", presentation: "modal", animation: "slide_from_bottom" }} />
        </Stack>
    );
}
