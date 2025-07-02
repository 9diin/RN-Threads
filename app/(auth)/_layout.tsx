import { Stack } from "expo-router";

export default function AuthLayout() {
    return (
        <Stack>
            <Stack.Screen name="sign-in" options={{ title: "로그인", headerShown: false }} />
            <Stack.Screen name="sign-up" options={{ title: "회원가입", headerBackButtonDisplayMode: "minimal" }} />
        </Stack>
    );
}
