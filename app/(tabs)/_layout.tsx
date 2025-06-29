import { Tabs } from "expo-router";
import { Heart, Home, Search, User } from "lucide-react-native";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "#000000", tabBarShowLabel: true }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "피드",
                    tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: "검색",
                    tabBarIcon: ({ size, color }) => <Search size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="notification"
                options={{
                    title: "알림",
                    tabBarIcon: ({ size, color }) => <Heart size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "프로필",
                    tabBarIcon: ({ size, color }) => <User size={size} color={color} />,
                }}
            />
        </Tabs>
    );
}
